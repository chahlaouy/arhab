import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatRomm = {
    chatID: null,
    message: null,
    senderUid: localStorage.getItem("uid"),
    receiverUid: null,
    receiverName: null,
    senderName: null 
  }
  constructor(
    private db: AngularFireDatabase
  ) { }

  setChatRoom(chatRoom){
    this.chatRomm.chatID = chatRoom.chatID
    this.chatRomm.receiverUid = chatRoom.receiverUid
    this.chatRomm.senderName = chatRoom.senderName
    this.chatRomm.receiverName = chatRoom.receiverName
  }

  getChatRoom(){
    return this.chatRomm
  }
  setMessage(message){
    this.chatRomm.message = message
  }
  sendMessage(){

    let timestamp = new Date().toLocaleTimeString()

    this.db.list(`${this.chatRomm.chatID}`).update('meta', {passenger: this.chatRomm.senderUid, driver: this.chatRomm.receiverUid})
    this.db.list(`${this.chatRomm.chatID}/messages`).push({message: this.chatRomm.message, driverName: this.chatRomm.senderName, timestamp: timestamp})
  }

  getAllMessages(){
    return this.db.list(`${this.chatRomm.chatID}/messages`).valueChanges()
  }
}
