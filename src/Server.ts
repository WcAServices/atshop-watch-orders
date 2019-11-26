import WebSocket from 'ws';
import Config from 'config';
const SimpleDDP = require('simpleddp');
const SimpleDDPLogin = require('simpleddp-plugin-login');

const Server = new SimpleDDP({
    endpoint: 'wss://atshop.io/websocket',
    SocketConstructor: WebSocket,
    reconnectInterval: 5000,
}, [SimpleDDPLogin]);

Server.login({
    resume: Config.get('loginToken'),
});

export default Server;