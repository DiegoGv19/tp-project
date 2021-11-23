import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFarmEditComponent } from './fish-farm-edit.component';

describe('FishFarmEditComponent', () => {
  let component: FishFarmEditComponent;
  let fixture: ComponentFixture<FishFarmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFarmEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishFarmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
