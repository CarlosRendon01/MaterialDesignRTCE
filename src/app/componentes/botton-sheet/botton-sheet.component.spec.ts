import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonSheetComponent } from './botton-sheet.component';

describe('BottonSheetComponent', () => {
  let component: BottonSheetComponent;
  let fixture: ComponentFixture<BottonSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
