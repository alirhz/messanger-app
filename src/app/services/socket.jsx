// lib/websocketService.js
import io from "socket.io-client";
import { BASE_URL } from "../utils/constant";

class WebSocketService {
  socket = null;
  subscribers = [];

  connect() {
    if (!this.socket) {
      this.socket = io(BASE_URL);

      this.socket.on('connect', () => {
        console.log('Connected to server');
      });

      this.socket.on('message', (msg) => {
        console.log('New message:', msg);
        this.notifySubscribers(msg);
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  sendMessage(message) {
    if (this.socket) {
      this.socket.emit('message', message);
    }
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(sub => sub !== callback);
  }

  notifySubscribers(message) {
    this.subscribers.forEach(callback => callback(message));
  }
}

const websocketService = new WebSocketService();
export default websocketService;
