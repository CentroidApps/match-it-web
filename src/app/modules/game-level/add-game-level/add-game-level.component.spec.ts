import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameLevelComponent } from './add-game-level.component';

describe('AddGameLevelComponent', () => {
  let component: AddGameLevelComponent;
  let fixture: ComponentFixture<AddGameLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGameLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGameLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
