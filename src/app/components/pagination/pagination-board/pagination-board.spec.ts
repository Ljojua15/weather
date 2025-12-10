import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBoard } from './pagination-board';

describe('PaginationBoard', () => {
  let component: PaginationBoard;
  let fixture: ComponentFixture<PaginationBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
