import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { UsersComponent } from './users/users.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';

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
      path: 'users',
      component: UsersComponent,
      data: {breadcrumb: 'Quản lý người dùng'},
    },
    {
      path: 'plans',
      data: { breadcrumb: 'Quản Lý Đề Án', },
        children: [
          {
            path: ':slug',
            component: PlanDetailComponent,
            data: {
              breadcrumb: (resolvedId: string) => `${resolvedId}`
            }
          },
        ],
    },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
