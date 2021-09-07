import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsmanStatsComponent } from './batsman-stats.component';

describe('BatsmanStatsComponent', () => {
  let component: BatsmanStatsComponent;
  let fixture: ComponentFixture<BatsmanStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatsmanStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsmanStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
