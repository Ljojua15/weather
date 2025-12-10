import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationChange } from './pagination-change';

describe('PaginationChange', () => {
  let component: PaginationChange;
  let fixture: ComponentFixture<PaginationChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
