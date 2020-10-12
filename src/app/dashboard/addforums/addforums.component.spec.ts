import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddforumsComponent } from './addforums.component';

describe('AddforumsComponent', () => {
  let component: AddforumsComponent;
  let fixture: ComponentFixture<AddforumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddforumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddforumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
