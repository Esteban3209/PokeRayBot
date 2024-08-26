async function scale_button(interaction) {
    try {
        const channel = await interaction.guild.channels.create({ 
            parent: "1131819896066555904", 
            name: "ticket-abierto"
        })
        channel.lockPermissions()
        channel.permissionOverwrites.edit(interaction.message.embeds[0].footer.text.split(" ")[3], {
            ViewChannel: true,
            SendMessages: true,
            EmbedLinks: true,
            AttachFiles: true,
            ReadMessageHistory: true,
            MentionEveryone: true
        })
        channel.send({ embeds: interaction.message.embeds, components: [
            {
                type: 1,
                components: [
                    {
                        "type": 2,
                        "style": 4,
                        "label": "Cerrar",
                        "custom_id": "close_button"
                    }
                ]
            }
        ]})
        interaction.reply({ content: "¡El ticket fue escalado con éxito!", ephemeral: true })
    } catch(e) {
        console.error(`Error while scaling a ticket : ${e}`)
        interaction.reply({ content: "Se encontró un error escalando el ticket...", ephemeral: true })
    }
}

module.exports = {
    scale_button: scale_button
}