import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredMessageComponent } from './recovered-message.component';

describe('RecoveredMessageComponent', () => {
  let component: RecoveredMessageComponent;
  let fixture: ComponentFixture<RecoveredMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveredMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
