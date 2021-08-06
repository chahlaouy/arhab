import { Component, OnInit } from '@angular/core';

import { ChatService } from '../services/chat.service'

@Component({
  selector: 'app-chat-single',
  templateUrl: './chat-single.component.html',
  styleUrls: ['./chat-single.component.scss'],
})
export class ChatSingleComponent implements OnInit {

  message: any;
  allMessages: any;
  receiverName = null 
  constructor(
    private chatServ: ChatService
  ) { }

  ngOnInit() {
    this.chatServ.getAllMessages().subscribe(data => {
      this.allMessages = data
      console.log(this.allMessages)
    });
    this.receiverName = this.chatServ.getChatRoom().receiverName
  }

  send(){
    this.chatServ.setMessage(this.message)
    this.chatServ.sendMessage()
    this.message = ''
  }

}
