import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { SpecializedComponent } from './specialized/specialized.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassComponent } from './class/class.component';
import { PlanComponent } from './plan/plan.component';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbListModule, NbButtonModule, NbTooltipModule, NbFormFieldModule, NbSelectModule } from '@nebular/theme';

import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { PlanFilesComponent } from './plan-files/plan-files.component';
import { PlanImagesDoccumentComponent } from './plan-images-doccument/plan-images-doccument.component';
import { UsersComponent } from './users/users.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    NbButtonModule,
    NbListModule,
    NbTooltipModule,
    NbFormFieldModule,
    NbSelectModule,
    Ng2SmartTableModule
  ],
  declarations: [
    PagesComponent,
    UsersComponent,
    SpecializedComponent,
    SubjectComponent,
    ClassComponent,
    PlanComponent,
    PlanDetailComponent,
    PlanFilesComponent,
    PlanImagesDoccumentComponent,
    UsersComponent,

  ],
  providers: []
})
export class PagesModule { }
