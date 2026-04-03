import { Component } from '@angular/core';
import { ChatServices } from '../../services/chatServices';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  public message: string = '';
  public messages: any = [];

  constructor(private chatService: ChatServices) {}

  public sendMessage(){
    this.chatService.sendMessage(this.message);
    this.messages.push(this.message);
    this.message = '';
  }

  public listenMessage(){

  }
}
