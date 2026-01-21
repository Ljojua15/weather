import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionModifier } from './resolution-modifier';

describe('ResolutionModifier', () => {
  let component: ResolutionModifier;
  let fixture: ComponentFixture<ResolutionModifier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionModifier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionModifier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
