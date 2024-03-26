const { Client, DataManager } = require("discord.js")
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
    switch (interaction.type) {
        case 2:
            switch (interaction.commandType) {
                case 1:
                    switch (interaction.commandName) {
                        case "deploy_commands":
                            try {
                                await command_list.functions.deploy_commands(interaction.user)
                                await interaction.reply({ content: "Commands deployed successfully test 2", ephemeral: true })
                            } catch(e) {
                                console.log(e)
                            }
                            break
                    }
                    break
            }
            break
    }
})

client.login(process.env.BOT_TOKEN)