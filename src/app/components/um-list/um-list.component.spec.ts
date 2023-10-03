import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmListComponent } from './um-list.component';

describe('UmListComponent', () => {
  let component: UmListComponent;
  let fixture: ComponentFixture<UmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmListComponent]
    });
    fixture = TestBed.createComponent(UmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
