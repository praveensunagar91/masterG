import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddasignmentComponent } from './addasignment.component';

describe('AddasignmentComponent', () => {
  let component: AddasignmentComponent;
  let fixture: ComponentFixture<AddasignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddasignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddasignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
