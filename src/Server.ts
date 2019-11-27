import WebSocket from 'ws';
import Config from 'config';
import SimpleDDP from 'simpleddp';
const SimpleDDPLogin = require('simpleddp-plugin-login').simpleDDPLogin;

const Server = new SimpleDDP({
    endpoint: 'wss://atshop.io/websocket',
    SocketConstructor: WebSocket,
    reconnectInterval: 5000,
}, [SimpleDDPLogin]);

Server.login({
    resume: Config.get('loginToken'),
});

export default Server;