import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddComplaintComponent } from './user-add-complaint.component';

describe('UserAddComplaintComponent', () => {
  let component: UserAddComplaintComponent;
  let fixture: ComponentFixture<UserAddComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
