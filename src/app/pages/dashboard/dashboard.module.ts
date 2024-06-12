import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { ChartModule } from 'angular2-chartjs';



import { NbCardModule } from '@nebular/theme';
@NgModule({
  imports: [
    BreadcrumbModule,
    NbCardModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }