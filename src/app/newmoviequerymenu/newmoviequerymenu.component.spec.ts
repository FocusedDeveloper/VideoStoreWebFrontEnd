import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmoviequerymenuComponent } from './newmoviequerymenu.component';

describe('NewmoviequerymenuComponent', () => {
  let component: NewmoviequerymenuComponent;
  let fixture: ComponentFixture<NewmoviequerymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmoviequerymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmoviequerymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
