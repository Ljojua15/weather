import { Component, EventEmitter, Output, signal } from '@angular/core';
import { WeatherTabsArray } from '../../../core/array/weather-tabs.array';

@Component({
  selector: 'weather-weather-tabs',
  imports: [],
  templateUrl: './weather-tabs.html',
  styleUrl: './weather-tabs.scss',
})
export class WeatherTabs {
  @Output() lengthCount = new EventEmitter<any>();
  public weatherTabs = WeatherTabsArray;
  public activeWeatherTab = signal(0);
  public changeWeatherTabs(tab: any) {
    this.lengthCount.emit(tab);
    this.activeWeatherTab.set(tab);
  }
}
