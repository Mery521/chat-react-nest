import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(  {cors: { origin: '*'}})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer()
  server: Server;

  private logger = new Logger('ChatGateway');

  @SubscribeMessage('send_message')
  handleMessage(@MessageBody() data: any){
    this.logger.log(`Message received: ${data}`);
    this.server.to(data.room).emit('receive_message', data);
  }
  @SubscribeMessage('join_room')
  handleJoinRoom(client: Socket, room: string){
    client.join(room);
    client.emit('join-room', room);
    console.log(`Joined! ${client.id} in ${room} room`);
  }
  @SubscribeMessage('leave_room')
  handleLeaveRoom(client: Socket, room: string){
    client.leave(room);
    client.emit('leave-room', room);
    console.log(`Leaved! ${client.id} from ${room} room`);
  }

  handleConnection(socket: Socket) {
    this.logger.log(`Socket connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    this.logger.log(`Socket disconnected: ${socket.id}`);
  }
}
