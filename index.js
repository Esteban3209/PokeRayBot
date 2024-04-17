const { Client } = require("discord.js")
const { patch, put, get } = require("./resources/methods")
const command_list = require("./interactions/commands/command_list")
const component_list = require("./interactions/components/component_list")
const modal_list = require("./interactions/modals/modal_list")
const express = require("express")
var UserRecord = {}

async function fetchData() {
    const res = await get(process.env.USER_RECORD_URL)
    UserRecord = res.data
}

function updateData() {
    setTimeout(() => {
        put(process.env.USER_RECORD_URL, UserRecord)
        updateData()
    }, 180000)
}

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"], partials: [ 0, 1, 2, 3, 4 ]})
const web = express()

web.get('/', (req, res) => {
    res.send("Bot is alive")
})

web.listen(10000, () => {
    console.log("Web server listening on port 10000")
})

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
                                interaction.reply({ content: "Refrescando los comandos... ", ephemeral: true }).then(() => {
                                    command_list.functions.deploy_commands()
                                })
                                break
                            case "destroy":
                                interaction.reply({ content: "El proceso fue terminado con éxito.", ephemeral: true }).then(() => {
                                    command_list.functions.destroy(client, interaction.user)
                                })
                                process.exit()
                            case "warn":
                                command_list.functions.warn(interaction, UserRecord)
                                break
                            case "generate":
                                command_list.functions.generate(interaction)
                                break
                            case "warnings":
                                command_list.functions.warnings(interaction, UserRecord)
                                break
                        }
                        break
                }
                break
            case 3:
                switch (interaction.componentType) {
                    case 2:
                        switch (interaction.customId) {
                            case "suggest_button":
                                component_list.functions.suggest_button(interaction)
                                break
                            case "report_button":
                                
                                break
                        }
                        break
                }
            case 5:
                switch (interaction.customId) {
                    case "suggest_modal":
                        modal_list.functions.suggest_modal(interaction, client)
                        break
                    case "report_modal":
                        modal_list.functions.report_modal(interaction, client)
                        break
                }
        }
    } catch(e) {
        console.error(e)
    }
})

console.log(JSON.stringify(component_list))

fetchData().then(() => {
    client.login(process.env.BOT_TOKEN)
    updateData()
})