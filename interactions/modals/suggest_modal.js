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

async function suggest_modal(interaction, client) {
    try {
        const channel = await client.channels.fetch('1228808165781672108')
        const title = interaction.fields.getTextInputValue("title")
        const content = interaction.fields.getTextInputValue("content")
        const message = {
            embeds: [
                {
                    "type": "rich",
                    "title": `Sugerencia ${title ? `: ${title}` : ""}`,
                    "description": content,
                    "author": {
                        "name": interaction.user.tag,
                        "icon_url": interaction.user.avatarURL() || null
                    },
                    "footer": `User ID : ${interaction.user.id}`,
                    "timestamp": new Date().toISOString()
                }
            ],
            components: [
                {
                    type: 1,
                    components: [
                        {
                            "type": 2,
                            "style": 3,
                            "label": "Conceder",
                            "custom_id": "concede_button"
                        },
                        {
                            "type": 2,
                            "style": 4,
                            "label": "Decline",
                            "custom_id": "decline_button"
                        },
                        {
                            "type": 2,
                            "style": 1,
                            "label": "Escalar",
                            "custom_id": "scale_button"
                        }
                    ]
                }
            ]
        }
        channel.send(message)
        interaction.reply({ content: "¡Tu sugerencia se envió con éxito!", ephemeral: true })
    } catch(e) {
        console.error(`Error while responding to a modal : ${e}`)
        interaction.reply({ content: "Se encontró un error enviando su sugerencia... Inténtelo de nuevo más tarde.", ephemeral: true })
    }
}

module.exports = {
    suggest_modal_structure: suggest_modal_structure,
    suggest_modal: suggest_modal
}