const { deploy_commands_structure, deploy_commands } = require("./deploy_commands")
const { destroy_structure, destroy } = require("./destroy")
const { warn_user_structure, open_modal, warn_user } = require("./warn_user")

module.exports = {
    structures: [ deploy_commands_structure, destroy_structure, warn_user_structure ],
    functions: {
        deploy_commands: deploy_commands,
        destroy: destroy,
        open_modal: open_modal,
        warn_user: warn_user
    }
}