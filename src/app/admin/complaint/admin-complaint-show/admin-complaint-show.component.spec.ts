import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplaintShowComponent } from './admin-complaint-show.component';

describe('AdminComplaintShowComponent', () => {
  let component: AdminComplaintShowComponent;
  let fixture: ComponentFixture<AdminComplaintShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComplaintShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplaintShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
