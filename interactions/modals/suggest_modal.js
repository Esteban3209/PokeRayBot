const suggest_modal_structure = {
    "custom_id": "suggest_modal",
    "title": "Sugerir...",
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
                    "placeholder": "Un título interesante para una sugerencia..."
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
                    "placeholder": "Sugiero que..."
                }
            ]
        }
    ]
}

async function suggest_modal() {
    try {
        const channel = await client.channels.fetch('1228808165781672108')
        const title = interaction.fields.getTextInputValue("title")
        const content = interaction.fields.getTextInputValue("content")
        const message = {
            embeds: [
                {
                    type: "rich",
                    title: `Sugerencia ${title ? `: ${title}` : ""}`,
                    description: content,
                    author: {
                        name: interaction.user.tag,
                        icon_url: interaction.user.avatarURL() || null
                    }
                }
            ]
        }
        channel.send(message)
    } catch(e) {
        console.error(`Error while responding to a modal : ${e}`)
        interaction.reply({ content: "Se encontró un error enviando su reporte... Inténtelo de nuevo más tarde.", ephemeral: true })
    }
}

module.exports = {
    suggest_modal_structure: suggest_modal_structure,
    suggest_modal: suggest_modal
}