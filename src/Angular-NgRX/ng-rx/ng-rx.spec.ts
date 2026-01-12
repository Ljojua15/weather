import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRx } from './ng-rx';

describe('NgRx', () => {
  let component: NgRx;
  let fixture: ComponentFixture<NgRx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
