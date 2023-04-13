import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Truck } from './truck';

describe('Truck testing', () => {
  let component: Truck;

  beforeEach(() => {
    component = new Truck(500);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Calculating truck fuel consumption', () => {
    component.calculateFuelConsumption();
    let s = component.truck;
    let p = 100 * 500;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  })
});
