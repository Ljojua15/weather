import { Component } from '@angular/core';
import { HomeCity } from './home-city/home-city';
import { HomeHours } from './home-hours/home-hours';
import { HomeDays } from './home-days/home-days';
import { HomeMap } from './home-map/home-map';

@Component({
  selector: 'weather-home-weather',
  imports: [HomeCity, HomeHours, HomeDays, HomeMap],
  templateUrl: './home-weather.html',
  styleUrl: './home-weather.scss',
})
export class HomeWeather {}
