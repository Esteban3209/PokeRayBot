var loop = true
const { Client } = require("discord.js")
const command_list = require("./commands/command_list")

while (loop) {

    const client = new Client({intents: ["GuildBans", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildModeration", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "Guilds", "MessageContent"], partials: [ 0, 1, 2, 3, 4 ]})

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
                                    loop = false
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
}