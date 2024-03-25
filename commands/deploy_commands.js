const axios = require("axios")

async function deploy_commands(user) {
    console.log(`Redeploying commands under orders of ${user.tag}...`)
    const { commands } = require("./command_definitions/command_list")
    const url = "https://discord.com/api/v10/applications/1220175932606779452/guilds/1198673648077262878/commands"
    var res = {}
    try { 
        res = await axios.get(url, {
            headers: {
                "Authorization": `Bot ${process.env.BOT_TOKEN}`
            }
        })
    } catch(e) {
        console.log(`Error while getting the command data : ${e}`)
        return
    }
    res.data.forEach(async (command) => {
        try {
            await axios.delete(`${url}/${command.id}`, {
                headers: {
                    "Authorization": `Bot ${process.env.BOT_TOKEN}`
                }
            })
        } catch(e) {
            console.log(`Error while deleting command ${command.name || "unknown"} : ${e}`)
            return
        }
    })
    commands.forEach(async (data) => {
        try {
            await axios.post(url, data, {
                headers: {
                    "Authorization": `Bot ${process.env.BOT_TOKEN}`
                }
            })
        } catch(e) {
            console.log(`Error while registering guild command "${data?.name || "unknown"}" : ${e}`)
            return
        }
    })
    console.log("Commands successfully deployed")
}

module.exports = {
    deploy_commands: deploy_commands
}