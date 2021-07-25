import { w3cwebsocket as W3CWebSocket } from "websocket";

const WsRequest = () => {
    var client = new W3CWebSocket('ws://127.0.0.1:5000');


    client.onopen = () => {
        console.log("Connected")
    }
}

export default WsRequest;
