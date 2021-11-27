import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFishFarmConfigurationComponent } from './add-fish-farm-configuration.component';

describe('AddFishFarmConfigurationComponent', () => {
  let component: AddFishFarmConfigurationComponent;
  let fixture: ComponentFixture<AddFishFarmConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFishFarmConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFishFarmConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
