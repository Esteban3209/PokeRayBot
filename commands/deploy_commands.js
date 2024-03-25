const axios = require("axios")

async function deploy_commands() {
    const { commands } = require("./command_definitions/command_list")
    const url = "https://discord.com/api/v10/applications/1220175932606779452/guilds/1198673648077262878/commands"
    commands.forEach(async (data) => {
        try {
            const res = await axios.post(url, data, {
                headers: {
                    "Authorization": `Bot ${process.env.BOT_TOKEN}`
                }
            })
        } catch(e) {
            console.log(`Error while registering guild commands : ${e}`)
        }
    })
}

module.exports = {
    deploy_commands: deploy_commands
}