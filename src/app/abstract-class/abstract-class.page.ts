import { Component, OnInit } from '@angular/core';
import { Car } from '../Class/car';
import { Conus } from '../Class/conus';
import { Figure3D } from '../Class/figure3D';
import { Passenger } from '../Class/passenger';
import { Piramid } from '../Class/piramid';
import { Truck } from '../Class/truck';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  figure: Figure3D[] = [];
  max: number = 0;
  car: Car[] = [];

  constructor() {}

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  ras(nn: any) {
    this.figure = new Array();
    let n = parseInt(nn);

    for (let i = 0; i < n; i++) {
      this.figure.push(
        new Conus('Конус', this.getRandomInt(10), this.getRandomInt(20))
      );

      this.figure.push(
        new Piramid('Піраміда', this.getRandomInt(10), this.getRandomInt(20))
      );
    }

    this.max = 0;

    this.figure.forEach((element) => {
      element.S();
      if (this.max < element.p1) this.max = element.p1;
      console.log(element.show());
    });
  }

  getColor(el: number, max: number) {
    return Math.abs(el - max) < 0.01 ? 'green' : '';
  }

  truckFuelConsumption(loadCapacity: any) {
    this.car = [...this.car];
    let loadCapacityNumber = parseInt(loadCapacity);
    this.car[0] = new Truck(loadCapacityNumber);

    this.car.forEach((element) => {
      element.calculateFuelConsumption();
      console.log(element.show(true));
    });

    console.log(this.car);
  }

  passengerFuelConsumption(passengers: any) {
    this.car = [...this.car];
    let passengersNumber = parseInt(passengers);
    this.car[1] = new Passenger(passengersNumber);

    this.car.forEach((element) => {
      element.calculateFuelConsumption();
      console.log(element.show(false));
    });

    console.log(this.car);
  }

  ngOnInit() {}
}
