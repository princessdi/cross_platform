export abstract class Figure3D {
  naz!: string;
  h!: number;
  p1!: number;
  parameter!: number;

  constructor() {}

  show() {
    return (
      'Назва=' +
      this.naz +
      ' ' +
      ' Висота=' +
      this.h.toFixed(2) +
      ' Площа=' +
      this.p1.toFixed(2)
    );
  }

  abstract S(): any;
}
