import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmovieitemComponent } from './newmovieitem.component';

describe('NewmovieitemComponent', () => {
  let component: NewmovieitemComponent;
  let fixture: ComponentFixture<NewmovieitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmovieitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmovieitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
