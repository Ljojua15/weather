import { Component, signal } from '@angular/core';
import { HomeChange } from './home-change/home-change';
import { CommonModule } from '@angular/common';
import { HomeWeather } from './home-weather/home-weather';
import { HomeCurrency } from './home-currency/home-currency';
import { EChangeTab } from '../../core/enum/change-tab.enum';

@Component({
  selector: 'weather-home',
  imports: [HomeChange, CommonModule, HomeWeather, HomeCurrency],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public activeTab = signal<EChangeTab>(EChangeTab.WEATHER);

  public handleActiveTab(activeTab: EChangeTab) {
    this.activeTab.set(activeTab);
  }

  protected readonly EChangeTab = EChangeTab;
}
