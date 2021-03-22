import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedItemDisplayComponent } from './selected-item-display.component';

describe('SelectedItemDisplayComponent', () => {
  let component: SelectedItemDisplayComponent;
  let fixture: ComponentFixture<SelectedItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedItemDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
