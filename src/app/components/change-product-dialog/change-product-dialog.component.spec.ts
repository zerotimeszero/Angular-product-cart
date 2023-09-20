import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProductDialogComponent } from './change-product-dialog.component';

describe('ChangeProductDialogComponent', () => {
  let component: ChangeProductDialogComponent;
  let fixture: ComponentFixture<ChangeProductDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeProductDialogComponent]
    });
    fixture = TestBed.createComponent(ChangeProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
