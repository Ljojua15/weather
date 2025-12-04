import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConverter } from './home-converter';

describe('HomeConverter', () => {
  let component: HomeConverter;
  let fixture: ComponentFixture<HomeConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
