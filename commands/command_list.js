const { deploy_commands_structure, deploy_commands } = require("./deploy_commands")

module.exports = {
    structures: [ deploy_commands_structure ],
    functions: {
        deploy_commands: deploy_commands
    }
}