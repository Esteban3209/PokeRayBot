const axios = require("axios")

const deploy_commands_structure = {
    "type": 1,
    "name": "deploy_commands",
    "description": "Refezca todos los comandos del servidor junto con sus permisos",
    "default_member_permissions": "0"
}

async function deploy_commands(user) {
    console.log(`Redeploying commands under orders of ${user.tag}...`)
    const { structures } = require("./command_list")
    const url = "https://discord.com/api/v10/applications/1220175932606779452/guilds/1198673648077262878/commands"
    var res = {}
    try { 
        res = await axios.get(url, {
            headers: {
                "Authorization": `Bot ${process.env.BOT_TOKEN}`
            }
        })
    } catch(e) {
        console.error(`Error while getting the command data : ${e}`)
        return
    }
    res.data.forEach(async (command) => {
        try {
            await axios.delete(`${url}/${command.id}`, {
                headers: {
                    "Authorization": `Bot ${process.env.BOT_TOKEN}`
                }
            })
            console.log(command.name)
        } catch(e) {
            console.error(`Error while deleting command ${command.name || "unknown"} : ${e}`)
            return
        }
    })
    structures.forEach(async (data) => {
        try {
            await axios.post(url, data, {
                headers: {
                    "Authorization": `Bot ${process.env.BOT_TOKEN}`
                }
            })
        } catch (e) {
            console.error(`Error while registering guild command "${data?.name || "unknown"}" : ${e}`)
            return
        }
    })
    console.log("Commands successfully deployed")
}

module.exports = {
    deploy_commands_structure: deploy_commands_structure,
    deploy_commands: deploy_commands
}