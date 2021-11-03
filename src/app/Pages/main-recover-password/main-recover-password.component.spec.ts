import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecoverPasswordComponent } from './main-recover-password.component';

describe('MainRecoverPasswordComponent', () => {
  let component: MainRecoverPasswordComponent;
  let fixture: ComponentFixture<MainRecoverPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRecoverPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
