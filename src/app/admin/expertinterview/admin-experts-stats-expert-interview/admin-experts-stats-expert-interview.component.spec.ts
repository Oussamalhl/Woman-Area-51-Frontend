import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpertsStatsExpertInterviewComponent } from './admin-experts-stats-expert-interview.component';

describe('AdminExpertsStatsExpertInterviewComponent', () => {
  let component: AdminExpertsStatsExpertInterviewComponent;
  let fixture: ComponentFixture<AdminExpertsStatsExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExpertsStatsExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpertsStatsExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
