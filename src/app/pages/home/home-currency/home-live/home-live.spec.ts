import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLive } from './home-live';

describe('HomeLive', () => {
  let component: HomeLive;
  let fixture: ComponentFixture<HomeLive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
