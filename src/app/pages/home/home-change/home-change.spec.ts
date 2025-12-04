import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChange } from './home-change';

describe('HomeChange', () => {
  let component: HomeChange;
  let fixture: ComponentFixture<HomeChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
