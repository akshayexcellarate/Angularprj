import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaycalenderComponent } from './holidaycalender.component';

describe('HolidaycalenderComponent', () => {
  let component: HolidaycalenderComponent;
  let fixture: ComponentFixture<HolidaycalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaycalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaycalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
