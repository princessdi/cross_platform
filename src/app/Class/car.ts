export abstract class Car {
  truck!: number;
  passenger!: number;

  constructor() {}

  show(showTruck: boolean) {
    return `Витрати пального на 100км:
        ${
          showTruck
            ? `Вантажівка - ${this.truck}`
            : `Легковий - ${this.passenger}`
        }
      `;
  }

  abstract calculateFuelConsumption(): any;
}
