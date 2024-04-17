const { suggest_button } = require("./suggest_button")
const { report_button } = require("./report_button")
const { concede_button } = require("./concede_button")
const { decline_button } = require("./decline_button")
const { scale_button } = require("./scale_button")

module.exports = {
    functions: {
        suggest_button: suggest_button,
        report_button: report_button,
        concede_button: concede_button,
        decline_button: decline_button,
        scale_button: scale_button
    }
}