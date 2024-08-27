const axios = require('axios');
const WebSocket = require('ws')

const apiKey = process.env.API_KEY;


function openWS() {
    axios.get('https://control.sparkedhost.us/api/client/servers/3ebb7e44/websocket', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + "ptlc_jR1RXpLOISoQzUtLi8tDB22ln5UQtHUexMLU0tpPSR1"
        }
    }).then(function (response) {
        console.log(response)
        const token = response.data.data.token;
        const ws = new WebSocket(response.data.data.socket, { origin: 'https://control.sparkedhost.us' });

        ws.on('open', function open() {
            ws.send(JSON.stringify({"event":"auth","args":[token]}));
            });
            
            ws.on('message', function message(data) {
            console.log(data.toString());
            });
            
            ws.on('error', function error(err) {
                console.log(err);
            });
    })
    .catch(function (error) {
        console.log(error);
    });
}

openWS()

module.exports = {
    openWS
}