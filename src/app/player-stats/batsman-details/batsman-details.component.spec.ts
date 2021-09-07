import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsmanDetailsComponent } from './batsman-details.component';

describe('BatsmanDetailsComponent', () => {
  let component: BatsmanDetailsComponent;
  let fixture: ComponentFixture<BatsmanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatsmanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsmanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
