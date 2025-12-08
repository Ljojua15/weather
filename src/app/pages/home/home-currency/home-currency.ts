import { Component } from '@angular/core';
import {HomeLive} from './home-live/home-live';
import {HomeRates} from './home-rates/home-rates';
import {HomeConverter} from './home-converter/home-converter';

@Component({
  selector: 'weather-home-currency',
  imports: [
    HomeLive,
    HomeRates,
    HomeConverter,
  ],
  templateUrl: './home-currency.html',
  styleUrl: './home-currency.scss',
})
export class HomeCurrency {

}
