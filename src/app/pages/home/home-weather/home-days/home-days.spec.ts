import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDays } from './home-days';

describe('HomeDays', () => {
  let component: HomeDays;
  let fixture: ComponentFixture<HomeDays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
