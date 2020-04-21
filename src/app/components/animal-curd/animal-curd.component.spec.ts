import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCURDComponent } from './animal-curd.component';

describe('AnimalCURDComponent', () => {
  let component: AnimalCURDComponent;
  let fixture: ComponentFixture<AnimalCURDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCURDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
