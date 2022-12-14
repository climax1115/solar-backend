"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
const ws_1 = require("ws");
let SocketService = class SocketService {
    constructor() {
        this.websocket = null;
        this.connect();
    }
    connect() {
        this.websocket = new ws_1.WebSocket(process.env.AWS_WEBSOCKET_URL || '');
        this.websocket.onclose = ({ wasClean, code, reason }) => {
            console.log(`onclose:   ${JSON.stringify({
                wasClean,
                code,
                reason
            })} Reconnect will be attempted in 1 second.`);
            setTimeout(() => {
                this.connect();
            }, 1000);
        };
        this.websocket.onerror = (error) => {
            console.log(error);
            console.log('onerror:   An error has occurred. See console for details.');
            setTimeout(() => {
                this.connect();
            }, 1000);
        };
        this.websocket.onmessage = (data) => {
            console.log(`onmessage: ${data}`);
        };
        this.websocket.onopen = () => {
            console.log('onopen:    Connected successfully.');
            this.send({ broadcast: true });
        };
    }
    send(data) {
        console.log(`server:    Sending a message. ${data.userId}`);
        const message = { action: 'routeA', data };
        this.websocket.send(JSON.stringify(message));
    }
    disconnect() {
        console.log('client:    Closing the connection.');
        this.websocket.close();
    }
};
SocketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map