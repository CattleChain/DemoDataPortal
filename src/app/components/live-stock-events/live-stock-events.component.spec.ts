import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStockEventsComponent } from './live-stock-events.component';

describe('LiveStockEventsComponent', () => {
  let component: LiveStockEventsComponent;
  let fixture: ComponentFixture<LiveStockEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStockEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStockEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
