const axios = require("axios")

async function getData(url) {
    try {
        var res = await axios.get(url)
        return res

    } catch (e) {
        console.log(`Error while communicating with the database : ${e}`)
    }
}

async function putData(url, content, headers = { headers: {'Content-Type': 'application/json'} }) {
    try {
        var res = await axios.put(url, content, headers)
        return res
    } catch (e) {
        console.log(`Error while putting the data : ${e}`)
    }
}

async function patchData(url, content, headers = { headers: {'Content-Type': 'application/json'} }) {
    try {
        var res = await axios.patch(url, content, headers)
        return res

    } catch (e) {
        console.log(`Error while patching the data : ${e}`)
    }
}

module.exports = {
    get: getData,
    put: putData,
    patch: patchData
}