import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPopupComponent } from './registration-popup.component';

describe('RegistrationPopupComponent', () => {
  let component: RegistrationPopupComponent;
  let fixture: ComponentFixture<RegistrationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPopupComponent],
    });
    fixture = TestBed.createComponent(RegistrationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
