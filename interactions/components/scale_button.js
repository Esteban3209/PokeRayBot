async function scale_button(interaction) {
    try {
        const channel = await interaction.guild.channels.create({ 
            parent: "1216187006812688455", 
            name: "ticket-abierto", 
            permissionOverwrites: [{ 
                id: interaction.message.embeds[0].footer.text.split(" ")[3],
                allow: 0x0000000000000040
            }] 
        })
        channel.send({ embeds: interaction.message.embeds, components: []  })
        interaction.reply({ content: "¡El ticket fue escalado con éxito!", ephemeral: true })
    } catch(e) {
        console.error(`Error while scaling a ticket : ${e}`)
        interaction.reply({ content: "Se encontró un error escalando el ticket...", ephemeral: true })
    }
}

module.exports = {
    scale_button: scale_button
}