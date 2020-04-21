import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffChainDBComponent } from './off-chain-db.component';

describe('OffChainDBComponent', () => {
  let component: OffChainDBComponent;
  let fixture: ComponentFixture<OffChainDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffChainDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffChainDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
