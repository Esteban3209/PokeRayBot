const suggest_modal_structure = {
    "custom_id": "suggest_modal",
    "title": "Sugerir...",
    "components": [
        {
            "type": 4,
            "custom_id": "title",
            "label": "Título",
            "style": 1,
            "required": false,
            "placeholder": "Un título interesante para una sugerencia..."
        },
        {
            "type": 4,
            "custom_id": "content",
            "label": "Contenido",
            "style": 2
        }
    ]
}

async function suggest_modal() {

}

module.exports = {
    suggest_modal_structure: suggest_modal_structure,
    suggest_modal: suggest_modal
}