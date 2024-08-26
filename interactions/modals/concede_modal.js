const concede_modal_structure = {
    "custom_id": "concede_modal",
    "title": "Conceder sugerencia",
    "components": [
        {
            "type": 1,
            "components": [
                {
                    "type": 4,
                    "custom_id": "title",
                    "label": "Título",
                    "style": 1,
                    "placeholder": "Título editado de la sugerencia"
                }
            ]
        },
        {
            "type": 1,
            "components": [
                {
                    "type": 4,
                    "custom_id": "content",
                    "label": "Contenido editado",
                    "style": 2,
                    "placeholder": "Contenido editado de la sugerencia",
                    "max_length": 2000
                }
            ]
        }
    ]
}

async function concede_modal(interaction, client) {
    try {
        const channel = await client.channels.fetch('1243761119743443005')
        const title = interaction.fields.getTextInputValue("title", true)
        const content = interaction.fields.getTextInputValue("content", true)
        const message = {
            embeds: [
                {
                    "type": "rich",
                    "title": title,
                    "description": content,
                    "author": {
                        "name": interaction.user.tag,
                        "icon_url": interaction.user.avatarURL() || null
                    },
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
                            "label": "Anunciar",
                            "custom_id": "announce_button"
                        }
                    ]
                }
            ]
        }
        channel.send(message)
        interaction.reply({ content: "¡La sugerencia fue concedida con éxito!", ephemeral: true })
    } catch(e) {
        console.error(`Error while responding to a modal : ${e}`)
        interaction.reply({ content: "Se encontró un error enviando su sugerencia... Inténtelo de nuevo más tarde.", ephemeral: true })
    }
}

module.exports = {
    concede_modal_structure: concede_modal_structure,
    concede_modal: concede_modal
}