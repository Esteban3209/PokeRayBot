const generate_structure = {
    "type": 1,
    "name": "generate",
    "description": "Genera un mensaje con los componentes indicados",
    "default_member_permissions": 0,
    "options": [
        {
            "type": 3,
            "name": "content",
            "description": "El contenido a enviar en el mensaje"
        },
        {
            "type": 3,
            "name": "embeds",
            "description": "La lista de embeds para enviar en el mensaje"
        },
        {
            "type": 3,
            "name": "components",
            "description": "La lista de componentes para enviar en el mensaje"
        }
    ]
}

async function generate(interaction) {
    try {
        const content = interaction.options.get("content")
        const embeds = interaction.options.get("embeds")
        const components = interaction.options.get("components")
        if (!(content || embeds || components)) {
            interaction.reply({ content: "No puede enviarse un mensaje vacío...", ephemeral : true })
            return
        }
        await interaction.channel.send({ content: content?.value || "{}", embeds: JSON.parse(embeds?.value || "{}"), components: JSON.parse(components?.value || "{}") })
    } catch(e) {
        console.error(`Error while generating message : ${e}`)
        interaction.reply({ content: "Algo salió mal generando el mensaje...", ephemeral: true })
    }
}

module.exports = {
    generate_structure: generate_structure,
    generate: generate
}