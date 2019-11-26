import WebSocket from 'ws';
const SimpleDDP = require('simpleddp');

const Server = new SimpleDDP({
    endpoint: 'wss://atshop.io/websocket',
    socketConstructor: WebSocket,
    reconnectInterval: 5000,
});

export default Server;