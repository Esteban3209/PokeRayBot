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
    const headers = {
        headers : {
            'Authorization': `Bot ${process.env.BOT_TOKEN}`
        }
    }
    var errors = 0
    var res = await axios.get(url, headers)
    if (!res.status == 400) {
        console.error(`Error while getting the data : error status ${res.status}`)
        return res.status
    }
    console.log("Deleting previous commands...")
    res.data.forEach(async (command) => {
        if (!command.name == 'deploy_commands') {
            const del = await axios.delete(`${url}/${command.id}`, headers)
            if (!del.status == 400) {
                console.error(`Error while deleting command ${command.name} : error status ${del.status}`)
                errors++
            }
        }
    })
    if (!errors == 0) {
        return errors
    }
    structures.forEach(async (structure) => {
        if (!structure.name == 'deploy_commands') {
            const post = await axios.post(url, structure, headers)
            if (!post.status == 400) {
                console.error(`Error while posting command ${structure.name} : error status ${post.status}`)
                errors++
            }
        }
    })
    return errors
}

module.exports = {
    deploy_commands_structure: deploy_commands_structure,
    deploy_commands: deploy_commands
}