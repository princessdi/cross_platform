import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title
          >Виконала студенка групи КН-32 Солодюк К.О., варіант - 20</ion-title
        >
      </ion-toolbar>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="dark" menu="first"></ion-menu-button>
        </ion-buttons>
        <ion-title>Лабораторні роботи</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        console.log(route);
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe((data: any) => {
      this.title = data.title || 'Лабораторна робота №1';
    });
  }
}
