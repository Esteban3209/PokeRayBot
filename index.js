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

async function putData(url, content, headers = { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }) {
    try {
        var res = await axios.put(url, content, headers)
        return res

    } catch (e) {
        console.log(`Error while putting the data : ${e}`)
    }
}

const promise = putData(`https://api.jsonstorage.net/v1/json/645c2fc7-bc7a-4e9a-9ea8-78beb159b036/cdf8dad0-fbad-4bc8-8d22-893f76670b5a?apiKey=${process.env.API_KEY}`, {'bruh': 'bruh'})
promise.then((res) => console.log(res.data))

client.login(process.env.BOT_TOKEN)