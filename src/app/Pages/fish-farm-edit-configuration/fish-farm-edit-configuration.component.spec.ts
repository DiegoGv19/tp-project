import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFarmEditConfigurationComponent } from './fish-farm-edit-configuration.component';

describe('FishFarmEditConfigurationComponent', () => {
  let component: FishFarmEditConfigurationComponent;
  let fixture: ComponentFixture<FishFarmEditConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFarmEditConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishFarmEditConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
