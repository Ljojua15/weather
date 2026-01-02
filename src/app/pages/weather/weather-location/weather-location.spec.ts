import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocation } from './weather-location';

describe('WeatherLocation', () => {
  let component: WeatherLocation;
  let fixture: ComponentFixture<WeatherLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
