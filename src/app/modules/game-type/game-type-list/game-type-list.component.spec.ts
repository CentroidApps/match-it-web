import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTypeListComponent } from './game-type-list.component';

describe('GameTypeListComponent', () => {
  let component: GameTypeListComponent;
  let fixture: ComponentFixture<GameTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameTypeListComponent]
    });
    fixture = TestBed.createComponent(GameTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
