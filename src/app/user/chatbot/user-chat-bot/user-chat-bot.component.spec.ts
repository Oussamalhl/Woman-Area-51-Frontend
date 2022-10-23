import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatBotComponent } from './user-chat-bot.component';

describe('UserChatBotComponent', () => {
  let component: UserChatBotComponent;
  let fixture: ComponentFixture<UserChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChatBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
