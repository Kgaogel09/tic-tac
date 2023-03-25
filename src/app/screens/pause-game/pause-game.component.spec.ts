import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseGameComponent } from './pause-game.component';

describe('PauseGameComponent', () => {
  let component: PauseGameComponent;
  let fixture: ComponentFixture<PauseGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PauseGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
