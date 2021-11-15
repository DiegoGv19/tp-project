import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFishFarmComponent } from './remove-fish-farm.component';

describe('RemoveFishFarmComponent', () => {
  let component: RemoveFishFarmComponent;
  let fixture: ComponentFixture<RemoveFishFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFishFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFishFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
