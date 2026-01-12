import { Component, signal } from '@angular/core';
import { WeatherSearch } from './weather-search/weather-search';
import { WeatherAlert } from './weather-alert/weather-alert';
import { WeatherTabs } from './weather-tabs/weather-tabs';
import { WeatherLocation } from './weather-location/weather-location';
import { CurrentConditions } from './weather-tabs/current-conditions/current-conditions';
import { WeatherEnum } from '../../core/enum/weather.enum';
import { Forecasts } from './weather-tabs/forecasts/forecasts';
import { Map } from '../map/map';
import { Alerts } from './weather-tabs/alerts/alerts';
import { Maps } from './weather-tabs/maps/maps';

@Component({
  selector: 'weather-weather',
  imports: [
    WeatherSearch,
    WeatherAlert,
    WeatherTabs,
    WeatherLocation,
    CurrentConditions,
    Forecasts,
    Alerts,
    Maps,
  ],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
})
export class Weather {
  public activeWeatherTab = signal(0);

  public tabId(id: number) {
    this.activeWeatherTab.set(id);
  }

  protected readonly WeatherEnum = WeatherEnum;
}
