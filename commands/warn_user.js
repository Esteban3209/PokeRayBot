const warn_structure = {
    "type": 1,
    "name": "warn",
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

async function warn(interaction, record) {
    try {
        const user = interaction.options.get("user", true).user
        const moderator = interaction.user.tag
        const reason = interaction.options.get("reason", true).value
        const warning = {
            "moderator": moderator,
            "date": Date.now(),
            "reason": reason
        }
        if (record[user.id]) {
            record[user.id].push(warning)
        } else {
            record[user.id] = [warning]
        }
        await user.send({ content: `Fuiste advertido en ${interaction.guild.name} por ${moderator}.\nRazón : ${reason}` })
        interaction.reply({ content: "Se advirió al usuario con éxito.", ephemeral: true })
    } catch(e) {
        console.error(`Error while warning a user : ${e}`)
        interaction.reply({ content: "Se encontró un error mientras se advertía al usuario.", ephemeral: true })
    }
}

module.exports = {
    warn_structure: warn_structure,
    warn: warn
}