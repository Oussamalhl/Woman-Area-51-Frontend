import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowComplaintComponent } from './user-show-complaint.component';

describe('UserShowComplaintComponent', () => {
  let component: UserShowComplaintComponent;
  let fixture: ComponentFixture<UserShowComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
