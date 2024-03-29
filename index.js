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
                                interaction.deferReply({ ephemeral: true })
                                const status = await command_list.functions.deploy_commands(interaction.user)
                                if (status >= 100) {
                                    if (status == 0) {
                                        interaction.reply({ content: "Los comandos fueron refrescados con éxito!", "ephemeral": true })
                                    } else {
                                        interaction.reply({ content: `${status} errores se encontraron intentando refrescar los comandos. Por favor reintentar.`, "ephemeral": true })
                                    }
                                } else {
                                    interaction.reply({ content: `Se encontró un error refrescando los comandos. Código de error : ${status}`, "ephemeral": true })
                                }
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

fetchData().then(() => {
    client.login(process.env.BOT_TOKEN)
})