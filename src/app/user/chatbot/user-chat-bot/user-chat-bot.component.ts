import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from "../../../_services/chatbot.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-user-chat-bot',
  templateUrl: './user-chat-bot.component.html',
  styleUrls: ['./user-chat-bot.component.scss']
})
export class UserChatBotComponent implements OnInit {

  messages: Message[] = [];
  conversation = new Subject<Message[]>();
  value: string="";
  collapsed : boolean = false;
  constructor(public chatService: ChatService) { }
  ngOnInit() {
    this.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    const userMessage = new Message('user', this.value);
    this.conversation.next([userMessage]);
    console.log(this.messages);
    this.chatService.sendMessage(this.value).subscribe(x => console.log(x), err => {console.log(err.error.text) ; this.conversation.next([new Message('bot', err.error.text)])}, () => console.log("complete"));


    this.value = '';
  }
  collapse(){
    if (this.collapsed) this.collapsed = false;
    else this.collapsed = true;

  }

}
