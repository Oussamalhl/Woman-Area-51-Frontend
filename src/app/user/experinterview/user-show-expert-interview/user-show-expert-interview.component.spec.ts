import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowExpertInterviewComponent } from './user-show-expert-interview.component';

describe('UserShowExpertInterviewComponent', () => {
  let component: UserShowExpertInterviewComponent;
  let fixture: ComponentFixture<UserShowExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
