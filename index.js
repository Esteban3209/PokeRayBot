const { Client } = require("discord.js")

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"]})

console.log(process.env.BOT_TOKEN)

client.login(process.env.BOT_TOKEN)