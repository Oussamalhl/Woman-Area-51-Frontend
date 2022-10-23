import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpertInterviewAddComponentComponent } from './admin-expert-interview-add-component.component';

describe('AdminExpertInterviewAddComponentComponent', () => {
  let component: AdminExpertInterviewAddComponentComponent;
  let fixture: ComponentFixture<AdminExpertInterviewAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExpertInterviewAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpertInterviewAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
