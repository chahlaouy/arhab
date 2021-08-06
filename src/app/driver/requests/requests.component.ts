import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

import { RequestService } from '../services/request.service'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  
  private requests: any;
  constructor(
    private requestSer: RequestService,
    private chatSer: ChatService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.requestSer.getAllDriverRequests().subscribe(data => {
      this.requests = data
    })

  }

  chatWithPassenger(req){
    let chatRoom = {
      chatID: null,
      receiverUid: null,
      receiverName: null,
      senderName: null
    }
    chatRoom.chatID = req.chatID;
    chatRoom.receiverUid = req.passengerUid;
    chatRoom.receiverName =  req.passengerInfo.username
    chatRoom.senderName = req.rideInfo.userInfo.userExtraInfo.username

    this.chatSer.setChatRoom(chatRoom)

    this.router.navigate(["/driver/requests/chat"])
    
  }
}
