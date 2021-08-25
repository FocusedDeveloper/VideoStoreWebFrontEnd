import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieitemmemeberviewComponent } from './movieitemmemeberview.component';

describe('MovieitemmemeberviewComponent', () => {
  let component: MovieitemmemeberviewComponent;
  let fixture: ComponentFixture<MovieitemmemeberviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieitemmemeberviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieitemmemeberviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
