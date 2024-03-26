const { Client } = require("discord.js")
const axios = require("axios")
const command_list = require("./commands/command_list")

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"], partials: [ 0, 1, 2, 3, 4 ]})

async function getData(url) {
    try {
        var res = await axios.get(url)
        return res

    } catch (e) {
        console.log(`Error while communicating with the database : ${e}`)
    }
}

async function putData(url, content, headers = { headers: {'Content-Type': 'application/json'} }) {
    try {
        var res = await axios.put(url, content, headers)
        return res

    } catch (e) {
        console.log(`Error while putting the data : ${e}`)
    }
}

async function patchData(url, content, headers = { headers: {'Content-Type': 'application/json'} }) {
    try {
        var res = await axios.patch(url, content, headers)
        return res

    } catch (e) {
        console.log(`Error while patching the data : ${e}`)
    }
}

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
                                await interaction.reply({ content: "¡Los comandos se reiniciaron con éxito!", ephemeral: true })
                                await interaction.channel.send('Process acknowledged')
                                break
                            case "destroy":
                                await command_list.functions.destroy(client, interaction.user)
                                await interaction.reply({ content: "¡El proceso fue terminado con éxito!", ephemeral: true })
                                process.exit(1)
                        }
                        break
                }
                break
        }
    } catch(e) {
        console.error(e)
    }
})

client.login(process.env.BOT_TOKEN)