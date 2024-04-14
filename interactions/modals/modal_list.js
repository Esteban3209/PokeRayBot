const { suggest_modal_structure, suggest_modal } = require("./suggest_modal")
const { report_modal_structure, report_modal } = require("./report_modal")

module.exports = {
    structures: {
        suggest_modal_structure: suggest_modal_structure,
        report_modal_structure: report_modal_structure
    },
    functions: {
        suggest_modal: suggest_modal,
        report_modal: report_modal
    }
}