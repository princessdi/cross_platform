import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Passenger } from './passenger';

describe('Passenger testing', () => {
  let component: Passenger;

  beforeEach(() => {
    component = new Passenger(5);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Calculating passenger fuel consumption', () => {
    component.calculateFuelConsumption();
    let s = component.passenger;
    let p = 2.5 * 5;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  })
});
