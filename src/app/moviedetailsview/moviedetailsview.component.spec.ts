import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailsviewComponent } from './moviedetailsview.component';

describe('MoviedetailsviewComponent', () => {
  let component: MoviedetailsviewComponent;
  let fixture: ComponentFixture<MoviedetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
