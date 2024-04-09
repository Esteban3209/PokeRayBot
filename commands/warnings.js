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
        const user = interaction.options.get("user")
        const warnings = record[user.id]
        const map = warnings.map((warning) => {
            warning 
        })
        
    } catch(e) {
        console.error(e)
        interaction.reply({ content: "Se encontró un error mostrando las advertencias...", ephemeral: true })
    }
}