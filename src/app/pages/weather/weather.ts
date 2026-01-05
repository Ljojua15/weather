import { Component } from '@angular/core';
import {WeatherSearch} from './weather-search/weather-search';
import {WeatherAlert} from './weather-alert/weather-alert';
import {WeatherTabs} from './weather-tabs/weather-tabs';
import {WeatherLocation} from './weather-location/weather-location';
import {CurrentConditions} from './weather-tabs/current-conditions/current-conditions';

@Component({
  selector: 'weather-weather',
  imports: [WeatherSearch, WeatherAlert, WeatherTabs, WeatherLocation, CurrentConditions],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
})
export class Weather {}
