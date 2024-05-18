import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SpecializedComponent} from './specialized/specialized.component';
import {SubjectComponent} from './subject/subject.component';
import {ClassComponent} from './class/class.component';
import {UsersComponent} from "./users/users.component";
import { PlanComponent } from './plan/plan.component';

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
      path: 'Plan',
      component: PlanComponent,
      data: {breadcrumb: 'Quản lý đề án'}
    },
    {
      path: 'specialized',
      component: SpecializedComponent,
      data: {breadcrumb: 'Quản lý Ngành'}    
    },
    {
      path: 'subject',
      component: SubjectComponent,
      data: {breadcrumb: 'Quản lý Môn'}    
    },
    {
      path: 'class',
      component: ClassComponent,
      data: {breadcrumb: 'Quản lý Lớp'}    
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
