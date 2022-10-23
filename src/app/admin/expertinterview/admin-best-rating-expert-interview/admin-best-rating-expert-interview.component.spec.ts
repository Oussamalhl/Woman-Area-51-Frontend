import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBestRatingExpertInterviewComponent } from './admin-best-rating-expert-interview.component';

describe('AdminBestRatingExpertInterviewComponent', () => {
  let component: AdminBestRatingExpertInterviewComponent;
  let fixture: ComponentFixture<AdminBestRatingExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBestRatingExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBestRatingExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
