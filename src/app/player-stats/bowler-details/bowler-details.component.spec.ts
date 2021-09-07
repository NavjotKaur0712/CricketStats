import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlerDetailsComponent } from './bowler-details.component';

describe('BowlerDetailsComponent', () => {
  let component: BowlerDetailsComponent;
  let fixture: ComponentFixture<BowlerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
