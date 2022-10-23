import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowExpertInterviewComponent } from './admin-show-expert-interview.component';

describe('AdminShowExpertInterviewComponent', () => {
  let component: AdminShowExpertInterviewComponent;
  let fixture: ComponentFixture<AdminShowExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
