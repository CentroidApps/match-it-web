import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDetailsTableComponent } from './level-details-table.component';

describe('LevelDetailsTableComponent', () => {
  let component: LevelDetailsTableComponent;
  let fixture: ComponentFixture<LevelDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDetailsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
