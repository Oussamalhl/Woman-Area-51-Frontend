import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Complaint} from "../models/complaint";
export class Message {
  mg: string=""
  constructor(public author: string, public content: string) {}
}
@Injectable()
export class ChatService {
  constructor(private _http:HttpClient) {}
  conversation = new Subject<Message[]>();
    messageMap = {
    "Hi": "Hello",
    "Who are you": "My name is Test Sat Bot",
    "What is your role": "Just guide for the user",
    "defaultmsg": "I can't understand your text. Can you please repeat"
  }
  getBotAnswer(msg: string) {

    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);

    setTimeout(()=>{
      let bm = "";
      this.getBotMessage(msg).subscribe((data) => {bm = JSON.stringify(data) ;const botMessage = new Message('bot', bm); this.conversation.next([botMessage]);});


    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this._http.get("http://localhost:8081/sendMessage/"+question)
    return answer || this.messageMap['defaultmsg'];
  }

  sendMessage(msg:string):Observable<HttpResponse<string>>{

    return this._http.get<HttpResponse<string>>("http://localhost:8081/sendMessage/"+msg);

  }
}

