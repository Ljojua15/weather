import { Component, output, signal } from '@angular/core';
import { EChangeTab } from '../../../core/enum/change-tab.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'weather-home-change',
  imports: [CommonModule],
  templateUrl: './home-change.html',
  styleUrl: './home-change.scss',
})
export class HomeChange {
  public handleActiveTab = output<EChangeTab>();

  protected readonly EChangeTab = EChangeTab;

  public activeTab = signal(EChangeTab.WEATHER);

  public changeTab(tab: EChangeTab) {
    this.activeTab.set(tab);
    this.handleActiveTab.emit(tab);
  }
}
