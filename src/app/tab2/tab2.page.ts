import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  d: number = 0;
  ras(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      if (isNaN(this.a) || isNaN(this.b)) throw new Error('invalid input');
      let count = 0;

      for (let i = a; i <= b; i++) {
        if (i % 2 !== 0 && i % 7 === 0) {
          count++;
        }
      }
      this.d = count;
    } catch (error) {
      console.log(error);
    }
  }
}
