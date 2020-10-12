import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexammarkspredictionComponent } from './addexammarksprediction.component';

describe('AddexammarkspredictionComponent', () => {
  let component: AddexammarkspredictionComponent;
  let fixture: ComponentFixture<AddexammarkspredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexammarkspredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexammarkspredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
