import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPlayersComponent } from './manager-players.component';

describe('ManagerPlayersComponent', () => {
  let component: ManagerPlayersComponent;
  let fixture: ComponentFixture<ManagerPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
