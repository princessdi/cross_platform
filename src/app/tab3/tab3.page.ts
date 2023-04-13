import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  n: number = 0;
  a: number [][] = []
  

  ras(n: any) {
    for (let i = 0; i < n; i++) {
      this.a[i] = [];
      for (let j = 0; j < n; j++) {
        this.a[i][j] = Math.floor(Math.random() * 100) - 50;
      }
    }
    console.log(this.a)
    return this.a;
};

getColor(c:number){
  if (c < 0 && c % 7 === 0 && c % 2 ===0){
    return "red";
  }else return "none"
}
  ngOnInit() {}
}
