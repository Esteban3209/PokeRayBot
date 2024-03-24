const { Client } = require("discord.js")
const axios = require("axios")

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"], partials: [ 0, 1, 2, 3, 4 ]})

async function getData(url) {
    var res = await axios.get(url, {
        headers: {
            'Authorization': '55de8c36-bdca-4083-8908-affc0845aacc'
        }
    })
    console.log(await res)
}

getData('https://api.jsonstorage.net/v1/json/645c2fc7-bc7a-4e9a-9ea8-78beb159b036/cdf8dad0-fbad-4bc8-8d22-893f76670b5a?apiKey=5f929d3c-38ea-4de5-bc8f-43363d6a3d46')

client.login(process.env.BOT_TOKEN)