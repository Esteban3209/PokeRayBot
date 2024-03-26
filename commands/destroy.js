const destroy_structure = {
    "type": 1,
    "name": "destroy",
    "description": "Destoys the client and makes the bot log out",
    "default_member_permissions": "0"
}

async function destroy(client) {
    try {
        await client.destroy()
    } catch(e) {
        console.error(`Error while destroying the client : ${e}`)
    }
}

module.exports = {
    destroy_structure: destroy_structure,
    destroy: destroy
}