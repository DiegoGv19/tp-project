import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeviceUninstallComponent } from './dialog-device-uninstall.component';

describe('DialogDeviceUninstallComponent', () => {
  let component: DialogDeviceUninstallComponent;
  let fixture: ComponentFixture<DialogDeviceUninstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeviceUninstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeviceUninstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
