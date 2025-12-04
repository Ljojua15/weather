import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCity } from './home-city';

describe('HomeCity', () => {
  let component: HomeCity;
  let fixture: ComponentFixture<HomeCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
