const methods = require("../resources/methods")

const warn_user_structure = {
    "type": 2,
    "name": "Warn User"
}

async function open_modal(interaction, user) {
    const modal = {
        "custom_id": "WarnModal",
        "title": `Warn ${user.tag}`,
        "components": [
            {
                "type": 1,
                "components": [
                    {
                        "type": 4,
                        "custom_id": "WarnReason",
                        "style": 2,
                        "label": "Reason",
                        "required": true
                    }
                ]
            }
            
        ]
    }
    try {
        await interaction.showModal(modal)
    } catch(e) {
        console.error(`Error while displaying modal : ${e}`)
    }
}

async function warn_user(interaction, user, record) {
    
}

module.exports = {
    warn_user_structure: warn_user_structure,
    open_modal: open_modal,
    warn_user: warn_user
}