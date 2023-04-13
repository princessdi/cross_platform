import { Car } from './car';

export class Passenger extends Car {
  passengers: number;

  constructor(passengers: number) {
    super();
    this.passengers = passengers;
  }

  calculateFuelConsumption() {
    this.passenger = 2.5 * this.passengers;
  }
}
