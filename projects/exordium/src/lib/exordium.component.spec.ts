import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExordiumComponent } from './exordium.component';

describe('ExordiumComponent', () => {
  let component: ExordiumComponent;
  let fixture: ComponentFixture<ExordiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExordiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExordiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
