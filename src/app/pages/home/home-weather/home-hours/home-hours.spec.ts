import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHours } from './home-hours';

describe('HomeHours', () => {
  let component: HomeHours;
  let fixture: ComponentFixture<HomeHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
