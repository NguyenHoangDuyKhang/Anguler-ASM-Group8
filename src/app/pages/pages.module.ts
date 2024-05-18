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
import { PlanComponent } from './plan/plan.component';
// import {  NbActionsModule,NbButtonModule,NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import {NbCardModule,
  NbIconModule, 
  NbInputModule, 
  NbTreeGridModule,
  NbLayoutModule, NbButtonModule} from '@nebular/theme';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    NbLayoutModule,
    NbButtonModule
  ],
  declarations: [
    PagesComponent,
    UsersComponent,
    SpecializedComponent,
    SubjectComponent,
    PlanComponent,
  ],
  providers: []
})
export class PagesModule { }
