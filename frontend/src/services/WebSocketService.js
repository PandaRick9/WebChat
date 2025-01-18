class WebSocketService {
    constructor() {
        this.socket = null;
    }

    connect(room, onMessage) {
        this.socket = new WebSocket(`ws://localhost:8080/chat`);
        this.socket.onopen = () => {
            console.log("Connected to WebSocket");
        };
        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.room === room) onMessage(message);
        };
    }

    sendMessage(message) {
        if (this.socket) {
            this.socket.send(JSON.stringify(message));
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}


export default new WebSocketService();  
