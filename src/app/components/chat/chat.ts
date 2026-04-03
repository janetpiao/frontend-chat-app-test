import { Component, OnInit } from '@angular/core';
import { ChatServices } from '../../services/chatServices';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  public message: string = '';
  public messages: any = [];

  ngOnInit(): void {
    this.listenMessage();
  }

  constructor(private chatService: ChatServices) {}

  public sendMessage() {
    this.chatService.sendMessage(this.message);
    this.messages.push(this.message);
    this.message = '';
  }

  public listenMessage() {
    this.chatService.listenMessage().subscribe((data: any) => {
      console.log(data);
      this.messages.push(data);
    });
  }
}
