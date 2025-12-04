import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeather } from './home-weather';

describe('HomeWeather', () => {
  let component: HomeWeather;
  let fixture: ComponentFixture<HomeWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
