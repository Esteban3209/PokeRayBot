const { Client } = require("discord.js")

const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"]})

console.log(secrets.BOT_TOKEN)

client.login(secrets.BOT_TOKEN)