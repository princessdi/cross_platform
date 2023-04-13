import { Car } from './car';

export class Truck extends Car {
  loadCapacity: number;

  constructor(loadCapacity: number) {
    super();
    this.loadCapacity = loadCapacity;
  }

  calculateFuelConsumption() {
    this.truck = 100 * this.loadCapacity;
  }
}
