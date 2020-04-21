import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainTraceComponent } from './blockchain-trace.component';

describe('BlockchainTraceComponent', () => {
  let component: BlockchainTraceComponent;
  let fixture: ComponentFixture<BlockchainTraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainTraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
