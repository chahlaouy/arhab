import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { ActionSheetController } from '@ionic/angular';
import { PassengerService } from '../services/passenger.service';
import { RequestService } from '../services/request.service'

import { PaymentService } from '../../payment/payment.service';

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
    private router: Router,
    public actionSheetController: ActionSheetController,
    private paymentSer: PaymentService
  ) { }

  ngOnInit() {
    this.requestSer.getAllPassengersRequest().subscribe(data => {
      this.requests = data
      console.log(data)
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

  paymentVisaMaster(data){
    this.paymentSer.setPaymentTree(data);
    this.router.navigate(["/payment/master-card"])
  }
  paymentMada(data){
    this.paymentSer.setPaymentTree(data);
    this.router.navigate(["/payment/mada"])
  }

  async presentActionSheet(data) {
    const actionSheet = await this.actionSheetController.create({
      header: "الدفع",
      cssClass: 'text-sm',
      buttons: [
        {
          text: "نقدا",
          icon: '',
          handler: () => {
            // this.router.navigate(["/passenger/payment-tree"])
          },
        },
        {
          text: "محفظتي",
          icon: '',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: " بطاقة مدي النقدية",

          icon: 'card',
          handler: () => {
            this.paymentMada(data);
          },
        },
        {
          text: " البطاقات الائتمانية",

          icon: 'card',
          handler: () => {
            this.paymentVisaMaster(data);
          },
        },
        {
          text: 'الغاء',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
  }

}
