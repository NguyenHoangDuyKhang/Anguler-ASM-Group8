import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {LayoutService} from "../../../@core/services/common/layout.service";


import { LocalStorageService } from 'app/@core/services/common';
import { LOCALSTORAGE_KEY, ROUTER_CONFIG } from 'app/@core/config';

import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private  localStorageService : LocalStorageService,
    private router : Router
  ) { }

  ngOnInit() {
    this.user = { picture: 'assets/images/account.png'}
    this.user.name = this.getInfo()

    

    this.currentTheme = this.themeService.currentTheme;
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
        .pipe(
            map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
            takeUntil(this.destroy$),
        )
        .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
        .pipe(
            map(({ name }) => name),
            takeUntil(this.destroy$),
        )
        .subscribe(themeName => this.currentTheme = themeName);

        this.menuService.onItemClick()
        .pipe(
          map(({ item: { title } }) => title),
        )
        .subscribe((data) => {
          console.log(data);
          if(data === 'Log out') {
            console.log('namcute');
            this.handleLogout()
          }
          
        });
  }



  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  getInfo() {
    return this.localStorageService.getItem<any>(LOCALSTORAGE_KEY.userInfo);
  }


  handleLogout() {
    this.router.navigate([ROUTER_CONFIG.auth.login]).then();
    this.localStorageService.removeItem(LOCALSTORAGE_KEY.token);
    this.localStorageService.removeItem(LOCALSTORAGE_KEY.userInfo);

    return 
  }
}
