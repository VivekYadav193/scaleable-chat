import { Server } from "socket.io";

class SocketService {
  private io: Server;

    constructor() {
        this.io = new Server();
    }
}