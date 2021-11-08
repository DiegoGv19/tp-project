import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFarmDetailsComponent } from './fish-farm-details.component';

describe('FishFarmDetailsComponent', () => {
  let component: FishFarmDetailsComponent;
  let fixture: ComponentFixture<FishFarmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFarmDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishFarmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
