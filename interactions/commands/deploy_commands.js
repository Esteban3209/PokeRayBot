const axios = require("axios")

const deploy_commands_structure = {
    "type": 1,
    "name": "deploy_commands",
    "description": "Refezca todos los comandos del servidor junto con sus permisos",
    "default_member_permissions": 0
}

async function deploy_commands() {
    console.log(`Redeploying commands...`)
    const { structures } = require("./command_list")
    const url = "https://discord.com/api/v10/applications/1225221607904120854/guilds/1059695189867909234/commands"
    const headers = {
        headers : {
            'Authorization': `Bot ${process.env.BOT_TOKEN}`
        }
    }
    var res = await axios.get(url, headers)
    if (res.status >= 300) {
        console.error(`Error while getting the data : error status ${res.status}`)
        return
    }
    res.data.forEach(async (command) => {
        if (command.name != 'deploy_commands') {
            const del = await axios.delete(`${url}/${command.id}`, headers)
            if (del.status >= 300) {
                console.error(`Error while deleting command ${command.name} : error status ${del.status}`)
            }
        }
    })
    structures.forEach(async (structure) => {
        if (structure.name != 'deploy_commands') {
            const post = await axios.post(url, structure, headers)
            if (post.status >= 300) {
                console.error(`Error while posting command ${structure.name} : error status ${post.status}`)
            }
        }
    })
}

module.exports = {
    deploy_commands_structure: deploy_commands_structure,
    deploy_commands: deploy_commands
}