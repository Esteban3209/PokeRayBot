const modal_list = require("../modals/modal_list")

async function report_button(interaction) {
    try {
        interaction.showModal(modal_list.structures.report_modal_structure)
    } catch(e) {
        console.error(`Error while showing modal : ${e}`)
        interaction.reply({ content: "Se encontró un error respondiendo a la interacción... Inténtalo de nuevo más tarde.", ephemeral: true })
    }
}

module.exports = {
    report_button: report_button
}