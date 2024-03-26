const { deploy_commands_structure, deploy_commands } = require("./deploy_commands")
const { destroy_structure, destroy } = require("./destroy")

module.exports = {
    structures: [ deploy_commands_structure, destroy_structure ],
    functions: {
        deploy_commands: deploy_commands,
        destroy: destroy
    }
}