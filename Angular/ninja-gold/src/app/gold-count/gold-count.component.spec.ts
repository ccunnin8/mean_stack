import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCountComponent } from './gold-count.component';

describe('GoldCountComponent', () => {
  let component: GoldCountComponent;
  let fixture: ComponentFixture<GoldCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
