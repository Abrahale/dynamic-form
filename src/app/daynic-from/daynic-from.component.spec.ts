import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaynicFromComponent } from './daynic-from.component';

describe('DaynicFromComponent', () => {
  let component: DaynicFromComponent;
  let fixture: ComponentFixture<DaynicFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaynicFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaynicFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
