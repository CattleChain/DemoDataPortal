import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStockCURDComponent } from './live-stock-curd.component';

describe('LiveStockCURDComponent', () => {
  let component: LiveStockCURDComponent;
  let fixture: ComponentFixture<LiveStockCURDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStockCURDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStockCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
