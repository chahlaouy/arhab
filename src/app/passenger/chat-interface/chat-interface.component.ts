import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

import { PassengerService } from '../services/passenger.service';
import { RequestService } from '../services/request.service'

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss'],
})
export class ChatInterfaceComponent implements OnInit {


  private requests: any;
  private passengerName = null;
  constructor(
    private requestSer: RequestService,
    private passengerSer: PassengerService, 
    private chatSer: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    this.requestSer.getAllPassengersRequest().subscribe(data => {
      this.requests = data
    })
    this.passengerSer.getUserState().subscribe(user => {
      this.passengerName = user.displayName
    })
  }

  chatWithDriver(req){
    let chatRoom = {
      chatID: null,
      receiverUid: null,
      receiverName: null,
      senderName: null
    }
    chatRoom.chatID = req.chatID;
    chatRoom.receiverUid = req.driverUid;
    chatRoom.receiverName = req.rideInfo.userInfo.userExtraInfo.username
    chatRoom.senderName = this.passengerName

    this.chatSer.setChatRoom(chatRoom)

    this.router.navigate(["/passenger/chat-interface/chat"])
    
  }

}
