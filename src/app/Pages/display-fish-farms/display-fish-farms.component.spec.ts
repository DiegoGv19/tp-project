import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFishFarmsComponent } from './display-fish-farms.component';

describe('DisplayFishFarmsComponent', () => {
  let component: DisplayFishFarmsComponent;
  let fixture: ComponentFixture<DisplayFishFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFishFarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFishFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
