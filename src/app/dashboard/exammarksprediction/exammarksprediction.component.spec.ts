import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExammarkspredictionComponent } from './exammarksprediction.component';

describe('ExammarkspredictionComponent', () => {
  let component: ExammarkspredictionComponent;
  let fixture: ComponentFixture<ExammarkspredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExammarkspredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExammarkspredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
