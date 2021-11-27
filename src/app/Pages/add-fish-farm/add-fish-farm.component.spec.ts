import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFishFarmComponent } from './add-fish-farm.component';

describe('AddFishFarmComponent', () => {
  let component: AddFishFarmComponent;
  let fixture: ComponentFixture<AddFishFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFishFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFishFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
