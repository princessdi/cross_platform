import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Piramid } from './piramid';

describe('Piramid testing', () => {
  let component: Piramid;

  beforeEach(() => {
    component = new Piramid('Piramid', 10, 5);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Calculating square of piramid', () => {
    component.S();
    let s = component.p1;
    let s4, s0;
    s4 = 0.5 * 10 * 5;
    s0 = 5 * 5;
    let p = 4 * s4 + s0;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  });
});
