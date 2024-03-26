const destroy_structure = {
    "type": 1,
    "name": "destroy",
    "description": "Destoys the client and makes the bot log out",
    "default_member_permissions": "0"
}

async function destroy(client, user) {
    try {
        await client.destroy()
        console.log(`Client destroyed under orders of : ${user.tag}`)
    } catch(e) {
        console.error(`Error while destroying the client : ${e}`)
    }
}

module.exports = {
    destroy_structure: destroy_structure,
    destroy: destroy
}