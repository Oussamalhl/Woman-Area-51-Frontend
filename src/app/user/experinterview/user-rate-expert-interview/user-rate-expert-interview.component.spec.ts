import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRateExpertInterviewComponent } from './user-rate-expert-interview.component';

describe('UserRateExpertInterviewComponent', () => {
  let component: UserRateExpertInterviewComponent;
  let fixture: ComponentFixture<UserRateExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRateExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRateExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
