import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCURDComponent } from './farm-curd.component';

describe('FarmCURDComponent', () => {
  let component: FarmCURDComponent;
  let fixture: ComponentFixture<FarmCURDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmCURDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
