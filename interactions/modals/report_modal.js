const component_list = require("../components/component_list")

const report_modal_structure = {
    "custom_id": "report_modal",
    "title": "Reportar...",
    "components": [
        {
            "type": 1,
            "components": [
                {
                    "type": 4,
                    "custom_id": "title",
                    "label": "Título",
                    "style": 1,
                    "required": false,
                    "placeholder": "Bug sobre... / Ruptura de la regla X..."
                }
            ]
        },
        {
            "type": 1,
            "components": [
                {
                    "type": 4,
                    "custom_id": "content",
                    "label": "Contenido",
                    "style": 2,
                    "placeholder": "Encontré un posible bug... / La regla X fue rota por..."
                }
            ]
        }
    ]
}

async function report_modal(interaction, client) {
    try {
        const channel = await client.channels.fetch('1228808165781672108')
        const title = interaction.fields.getTextInputValue("title")
        const content = interaction.fields.getTextInputValue("content")
        const message = {
            embeds: [
                {
                    "type": "rich",
                    "title": `Reporte ${title ? `: ${title}` : ""}`,
                    "description": content,
                    "author": {
                        "name": interaction.user.tag,
                        "icon_url": interaction.user.avatarURL() || null
                    },
                    "timestamp": new Date().toISOString()
                }
            ]
        }
        channel.send(message)
        interaction.reply({ content: "¡Tu sugerencia se envió con éxito!", ephemeral: true })
    } catch(e) {
        console.error(`Error while responding to a modal : ${e}`)
        interaction.reply({ content: "Se encontró un error enviando su reporte... Inténtelo de nuevo más tarde.", ephemeral: true })
    }
}

module.exports = {
    report_modal_structure: report_modal_structure,
    report_modal: report_modal
}