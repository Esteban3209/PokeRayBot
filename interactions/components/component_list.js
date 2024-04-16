const { suggest_button } = require("./suggest_button")
const { concede_button_structure, concede_button } = require("./concede_button")
const { decline_button_structure, decline_button } = require("./decline_button")
const { scale_button_structure, scale_button } = require("./scale_button")

module.exports = {
    structures: {
        concede_button_structure: concede_button_structure,
        decline_button_structure: decline_button_structure,
        scale_button_structure: scale_button_structure
    },
    functions: {
        suggest_button: suggest_button,
        concede_button: concede_button,
        decline_button: decline_button,
        scale_button: scale_button
    }
}