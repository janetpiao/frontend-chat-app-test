import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  public message: string = '';
  public messages: string[] = [];
  public sendMessage(){

  }

  public listenMessage(){

  }
}
