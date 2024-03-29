const { Client } = require("discord.js")
const command_list = require("./commands/command_list")
const axios = require("axios")
var UserRecord = {}

async function fetchData() {
    try {
        UserRecord = await axios.get(process.env.USER_RECORD_URL)
    } catch(e) {
        console.error(`Error while getting the UserRecord : ${e}`)
    }
}

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"], partials: [ 0, 1, 2, 3, 4 ]})

client.once('ready', () => {
    try {
        console.log("Bot connected")

    } catch(e) {
        console.log(`Error while running start functions : ${e}`)
    }
})

client.on('interactionCreate', (interaction) => {
    try {
        switch (interaction.type) {
            case 2:
                switch (interaction.commandType) {
                    case 1:
                        switch (interaction.commandName) {
                            case "deploy_commands":
                                interaction.reply({ content: "Refrescando los comandos... ", ephemeral: true })
                                command_list.functions.deploy_commands(interaction.user)
                                break
                            case "destroy":
                                command_list.functions.destroy(client, interaction.user)
                                interaction.reply({ content: "¡El proceso fue terminado con éxito!", ephemeral: true })
                                process.exit()
                        }
                        break
                    case 2: 
                        switch (interaction.commandName) {
                            case "Warn User":
                                command_list.functions.open_modal(interaction, interaction.targetUser)
                        }
                }
                break
        }
    } catch(e) {
        console.error(e)
    }
})

fetchData().then(() => {
    client.login(process.env.BOT_TOKEN)
})