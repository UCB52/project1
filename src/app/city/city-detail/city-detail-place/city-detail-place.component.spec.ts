import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailPlaceComponent } from './city-detail-place.component';

describe('CityDetailPlaceComponent', () => {
  let component: CityDetailPlaceComponent;
  let fixture: ComponentFixture<CityDetailPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDetailPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
