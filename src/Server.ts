import WebSocket from 'ws';
const SimpleDDP = require('simpleddp');

export default new SimpleDDP({
    endpoint: 'wss://atshop.io/websocket',
    socketConstructor: WebSocket,
    reconnectInterval: 5000,
});