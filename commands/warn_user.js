const warn_user_structure = {
    "type": 1,
    "name": "Warn User",
    "description": "Advierte a un usuario por la ruptura de una regla",
    "default_member_permissions": 0x2,
    "options": [
        {
            "type": 6,
            "name": "user",
            "description": "El usuario al que advertir",
            "required": true
        },
        {
            "type": 3,
            "name": "reason",
            "description": "La razón de la advertencia",
            "required": true
        }
    ]
}

async function warn_user(interaction, record) {
    try {
        const user = interaction.options.get("user", true)
        const warning = {
            "moderator": interaction.user.tag,
            "date": Date.now(),
            "reason": interaction.options.get("reason", true)
        }
        if (record[user.id]) {
            record[user.id].push(warning)
        } else {
            record[user.id] = [warning]
        }
    } catch(e) {
        console.error(`Error while warning a user : ${e}`)
        interaction.reply({ content: "Se encontró un error mientras se advertía al usuario.", ephemeral: true })
    }
    interaction.reply({ content: "Se advirió al usuario con éxito.", ephemeral: true })
}

module.exports = {
    warn_user_structure: warn_user_structure,
    warn_user: warn_user
}