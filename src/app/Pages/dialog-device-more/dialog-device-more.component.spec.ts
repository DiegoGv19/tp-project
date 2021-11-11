import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeviceMoreComponent } from './dialog-device-more.component';

describe('DialogDeviceMoreComponent', () => {
  let component: DialogDeviceMoreComponent;
  let fixture: ComponentFixture<DialogDeviceMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeviceMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeviceMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
