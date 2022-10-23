import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateComplaintComponent } from './admin-update-complaint.component';

describe('AdminUpdateComplaintComponent', () => {
  let component: AdminUpdateComplaintComponent;
  let fixture: ComponentFixture<AdminUpdateComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
