import { Component } from '@angular/core';
import {WeatherSearch} from './weather-search/weather-search';
import {WeatherAlert} from './weather-alert/weather-alert';
import {WeatherTabs} from './weather-tabs/weather-tabs';
import {WeatherLocation} from './weather-location/weather-location';

@Component({
  selector: 'weather-weather',
  imports: [
    WeatherSearch,
    WeatherAlert,
    WeatherTabs,
    WeatherLocation
  ],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
})
export class Weather {

}
