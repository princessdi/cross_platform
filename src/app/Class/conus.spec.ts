import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Conus } from './conus';

describe('Conus testing', () => {
  let component: Conus;

  beforeEach(() => {
    component = new Conus('Conus', 10, 5);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Calculating square of conus', () => {
    component.S();
    let s = component.p1;
    let p = Math.PI * Math.sqrt(5 * 5 + 10 * 10) * 5;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  })
});
