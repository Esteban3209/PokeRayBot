const warnings_structure = {
    "type": 1,
    "name": "warnings",
    "description": "Muestra las advertencias de un usuario",
    "default_member_permissions": 0x2,
    "options": [
        {
            "type": 6,
            "name": "user",
            "description": "El usuario del cual mostrar las advertencias",
            "required": true
        }
    ]
}

async function warnings(interaction, record) {
    try {
        const user = interaction.options.get("user").user
        const warnings = record[`${user.id}`]
        if (!warnings) {
            await interaction.reply({ content: "Este usuario no tiene advertencias" })
            return
        }
        const map = warnings.map((warning) => {
            return `**Moderador**: ${warning.moderator}\n**Razón**: ${warning.reason}\n**Fecha**: <t:${warning.date}>`
        }).join("\n\n")
        const embed = {
            "title": `Advertencias de ${user.tag}`,
            "type": "rich",
            "description": map,
            "color": "#ff0000",
        }
        interaction.reply({ embeds: [embed] })
    } catch(e) {
        console.error(`Error while showing warnings : ${e}`)
        interaction.reply({ content: "Se encontró un error mostrando las advertencias...", ephemeral: true })
    }
}

module.exports = {
    warnings_structure: warnings_structure,
    warnings: warnings
}