import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlert } from './weather-alert';

describe('WeatherAlert', () => {
  let component: WeatherAlert;
  let fixture: ComponentFixture<WeatherAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
