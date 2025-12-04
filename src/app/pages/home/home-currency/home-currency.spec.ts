import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrency } from './home-currency';

describe('HomeCurrency', () => {
  let component: HomeCurrency;
  let fixture: ComponentFixture<HomeCurrency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCurrency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCurrency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
