import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddExpertInterviewComponent } from './user-add-expert-interview.component';

describe('UserAddExpertInterviewComponent', () => {
  let component: UserAddExpertInterviewComponent;
  let fixture: ComponentFixture<UserAddExpertInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddExpertInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddExpertInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
