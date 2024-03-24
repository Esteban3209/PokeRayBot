const { Client, DataManager } = require("discord.js")
const axios = require("axios")

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"], partials: [ 0, 1, 2, 3, 4 ]})

async function getData(url) {
    try {
        var res = await axios.get(url)
        const data = await res.json()
        return data

    } catch (e) {
        console.log(`Error while communicating with the database : ${e}`)
    }
}

const promise = getData(`https://api.jsonstorage.net/v1/json/645c2fc7-bc7a-4e9a-9ea8-78beb159b036/cdf8dad0-fbad-4bc8-8d22-893f76670b5a?apiKey=${process.env.API_KEY}`)
promise.then((res) => console.log(res.data))

client.login(process.env.BOT_TOKEN)