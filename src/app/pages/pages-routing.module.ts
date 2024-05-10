import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListComponent} from "./list/list.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'list',
      component: ListComponent,
      data: {breadcrumb: 'Quản lý đề án'}
    },
    {
      path: 'data',
      component: ListComponent,
      data: {breadcrumb: 'Quản lý đề án'}
    },
    {
      path: 'users',
      component: UsersComponent,
      data: {breadcrumb: 'Quản lý người dùng'},
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
