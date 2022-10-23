import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateExpertInterviewComponent } from './admin-update-expert-interview.component';

describe('AdminUpdateExpertInterviewComponent', () => {
  let component: AdminUpdateExpertInterviewComponent;
  let fixture: ComponentFixture<AdminUpdateExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
