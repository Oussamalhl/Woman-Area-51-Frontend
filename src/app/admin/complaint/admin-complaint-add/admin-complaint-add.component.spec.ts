import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplaintAddComponent } from './admin-complaint-add.component';

describe('AdminComplaintAddComponent', () => {
  let component: AdminComplaintAddComponent;
  let fixture: ComponentFixture<AdminComplaintAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComplaintAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplaintAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
