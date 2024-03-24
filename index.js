const { Client } = require("discord.js")
require("dotenv").config()

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"]})

console.log(process.env.BOT_TOKEN)

client.login(process.env.BOT_TOKEN)