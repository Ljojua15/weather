import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRates } from './home-rates';

describe('HomeRates', () => {
  let component: HomeRates;
  let fixture: ComponentFixture<HomeRates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
