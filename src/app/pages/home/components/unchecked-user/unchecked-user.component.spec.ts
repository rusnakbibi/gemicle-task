import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckedUserComponent } from './unchecked-user.component';

describe('UncheckedUserComponent', () => {
  let component: UncheckedUserComponent;
  let fixture: ComponentFixture<UncheckedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncheckedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncheckedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
