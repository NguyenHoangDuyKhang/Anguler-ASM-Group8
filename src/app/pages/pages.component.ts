import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import introJs from 'intro.js/intro.js';
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
  constructor() {}
  ngOnInit(): void {
    const intro = introJs();
    intro.setOptions({
      steps: [{
        title: 'Welcome',
        intro: '<img src="https://i.pinimg.com/originals/5c/f8/49/5cf849f45bad6a929714a2409b51d75f.gif" width="200px"> Xin chào, đây có lẽ là lần đầu bạn ghé qua Website của chúng tôi!😉',
      },
      {
        title: '',
        intro: '<img src="https://i.pinimg.com/originals/58/87/fe/5887fee34fa7456381abff3a1c32ee7d.gif" width="200px">Vậy thì mau lên xe, để tôi đèo bạn đi tham quan nhá!😁',
      },
      {
        element: document.querySelector('nb-menu'),
        intro: '<img src="https://i.pinimg.com/originals/75/8a/df/758adf3ca9d4e9ce3ff3bd175ebcff63.gif" width="auto" height="150px"><br/>Đây là Menu, dùng để điều hướng website',
      },
      {
        element: document.querySelector('ngx-header'),
        intro: '<img src="https://i.pinimg.com/originals/02/20/ef/0220efe54902d5c2e44bd856f179e8a0.gif" width="250px"> Đây là Header',
      },
      {
        element: document.querySelector('nb-layout-column'),
        intro: '<img src="https://i.pinimg.com/originals/2c/fa/d7/2cfad7190ee52b041d002286a3af22d1.gif" width="250px"> Còn đây là giao diện chính',
      }, {
        title: '',
        intro: '<img src="https://i.pinimg.com/originals/ab/52/19/ab521927a68fd6c61120818849bdffdd.gif" width="200px"> Vừa rồi tôi đã giới thiệu sơ về Website rồi, chúc bạn có trãi nghiệm thật tốt nhá!',
      },
    ]
    
    });

    const lastExitTime = localStorage.getItem('lastExitTime');

  if (!lastExitTime || (Date.now() - Number(lastExitTime)) > (60 * 60 * 1000)) {
    intro.start();
    localStorage.setItem('lastExitTime', String(Date.now()));
    return;
  }
  }
}


