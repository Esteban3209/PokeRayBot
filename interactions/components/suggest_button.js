const { suggest_modal_structure } = require("../modals/suggest_modal")

async function suggest_button(interaction) {
    interaction.showModal(suggest_modal_structure)
}

module.exports = {
    suggest_button: suggest_button
}