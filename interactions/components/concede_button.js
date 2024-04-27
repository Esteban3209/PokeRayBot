const modal_list = require("../modals/modal_list")

async function concede_button(interaction) {
    try {
        var modal_structure = modal_list.structures.concede_modal_structure
        if (interaction.message.embeds[0].title != "Sugerencia ") {
            modal_structure.components[0].components[0].value = interaction.message.embeds[0].title
        }
        modal_structure.components[0].components[1].value = interaction.message.embeds[0].description
        interaction.showModal(modal_structure)
    } catch(e) {
        console.error(`Error while showing modal : ${e}`)
        interaction.reply({ content: "Se encontró un error concediendo esta sugerencia...", ephemeral: true })
    }
}

module.exports = {
    concede_button: concede_button
}