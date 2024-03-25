const { Client, DataManager } = require("discord.js")
const axios = require("axios")

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

client.login(process.env.BOT_TOKEN)