import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { UsersComponent } from './users/users.component';
import { SpecializedComponent } from './specialized/specialized.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassComponent } from './class/class.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
  ],
  declarations: [
    PagesComponent,
    UsersComponent,
    SpecializedComponent,
    SubjectComponent,
    ClassComponent,
    PlanComponent,
  ],
  providers: []
})
export class PagesModule { }
