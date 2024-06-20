import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SpecializedComponent} from './specialized/specialized.component';
import {SubjectComponent} from './subject/subject.component';
import { PlanComponent } from './plan/plan.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { UsersComponent } from './users/list-user/users.component';
import { AddUserComponent } from './users/add-update-user/add-update-user.component';

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
      path: 'plans',
      component: PlanComponent,
      data: {breadcrumb: 'Quản lý đề án'}
    },
    {
      path: 'specialized',
      component: SpecializedComponent,
      data: {breadcrumb: 'Quản lý Ngành'}    
    },
    // {
    //   path: 'subject',
    //   component: SubjectComponent,
    //   data: {breadcrumb: 'Quản lý Môn'}    
    // },
    {
      path: 'users',
      component: UsersComponent,
      data: {breadcrumb: 'Quản lý người dùng'},
    },
    {
      path: 'users',
      data: {breadcrumb: 'Quản lý người dùng'},
        children: [
          {
            path: 'new',
            component: AddUserComponent,
            data: { breadcrumb: 'Thêm Mới Người Dùng' },
          },
          {
            path: ':id',
            component: AddUserComponent,
          },
        ],
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
