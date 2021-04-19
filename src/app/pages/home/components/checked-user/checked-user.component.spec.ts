import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedUserComponent } from './checked-user.component';

describe('CheckedUserComponent', () => {
  let component: CheckedUserComponent;
  let fixture: ComponentFixture<CheckedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
