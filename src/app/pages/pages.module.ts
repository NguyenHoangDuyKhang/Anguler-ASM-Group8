import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { ModalFileModule } from 'app/@theme/components/modal-file/modal-file.module';
import { SpecializedComponent } from './specialized/specialized.component';
import { SubjectComponent } from './subject/subject.component';
import { PlanComponent } from './plan/plan.component';

import { NbCardModule, NbIconModule, NbSpinnerModule, NbInputModule, NbTreeGridModule, NbLayoutModule, NbListModule, NbButtonModule, NbTooltipModule, NbFormFieldModule, NbSelectModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { PlanFilesComponent } from './plan-files/plan-files.component';
import { PlanImagesDoccumentComponent } from './plan-images-doccument/plan-images-doccument.component';
import { UsersComponent } from './users/list-user/users.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddUserComponent } from './users/add-update-user/add-update-user.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    ModalFileModule,
    NbCardModule, 
    NbIconModule, 
    NbInputModule, 
    NbTreeGridModule, 
    NbButtonModule,
    NbListModule,
    NbTooltipModule,
    NbFormFieldModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    SpecializedComponent,
    SubjectComponent,
    PlanComponent,
    PlanDetailComponent,
    PlanFilesComponent,
    PlanImagesDoccumentComponent,
    UsersComponent,
    AddUserComponent,

  ],
  providers: []
})
export class PagesModule { }
