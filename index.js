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

client.once('ready', async () => {
    try {
        console.log("Bot connected")

    } catch(e) {
        console.log(`Error while running start functions : ${e}`)
    }
})

client.on('interactionCreate', async (interaction) => {
    try {
        switch (interaction.type) {
            case 2:
                switch (interaction.commandType) {
                    case 1:
                        switch (interaction.commandName) {
                            case "deploy_commands":
                                await command_list.functions.deploy_commands(interaction.user)
                                console.log("Calling")
                                await interaction.reply({ content: "¡Los comandos se reiniciaron con éxito!", ephemeral: true })
                                console.log("Reply")
                                break
                            case "destroy":
                                await command_list.functions.destroy(client, interaction.user)
                                await interaction.reply({ content: "¡El proceso fue terminado con éxito!", ephemeral: true })
                                process.exit()
                        }
                        break
                    case 2: 
                        switch (interaction.commandName) {
                            case "Warn User":
                                await command_list.functions.open_modal(interaction, interaction.targetUser)
                        }
                }
                break
        }
    } catch(e) {
        console.error(e)
    }
})

command_list.functions.deploy_commands({tag : "esteban3209"})

fetchData().then(() => {
    client.login(process.env.BOT_TOKEN)
})