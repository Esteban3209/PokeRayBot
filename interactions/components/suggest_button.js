const modal_list = require("../modals/modal_list")

async function suggest_button(interaction) {
    try {
        interaction.showModal(modal_list.structures.suggest_modal_structure)
    } catch(e) {
        console.error(`Error while showing modal : ${e}`)
        interaction.reply({ content: "Se encontró un error respondiendo a la interacción... Inténtalo de nuevo más tarde.", ephemeral: true })
    }
}

module.exports = {
    suggest_button: suggest_button
}