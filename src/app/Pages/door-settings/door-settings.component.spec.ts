import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorSettingsComponent } from './door-settings.component';

describe('DoorSettingsComponent', () => {
  let component: DoorSettingsComponent;
  let fixture: ComponentFixture<DoorSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
