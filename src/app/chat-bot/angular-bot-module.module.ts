import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatBotComponent } from './chat-bot.component';
import { ChatService } from "src/app/_services/chatbot.service";
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ChatBotComponent],
  providers: [ChatService],
})
export class AngularBotModule {}
