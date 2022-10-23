import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRateExpertInterviewComponent } from './admin-rate-expert-interview.component';

describe('AdminRateExpertInterviewComponent', () => {
  let component: AdminRateExpertInterviewComponent;
  let fixture: ComponentFixture<AdminRateExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRateExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRateExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
