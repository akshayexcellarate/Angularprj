import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrhandbookComponent } from './hrhandbook.component';

describe('HrhandbookComponent', () => {
  let component: HrhandbookComponent;
  let fixture: ComponentFixture<HrhandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrhandbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrhandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
