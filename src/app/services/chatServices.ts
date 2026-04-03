import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ChatServices {
  constructor(private socket: Socket) {}

  public sendMessage(message: string){
    this.socket.emit('message', message);
  }

  public listenMessage(){

  }
}
