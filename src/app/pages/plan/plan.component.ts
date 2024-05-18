import { Component } from '@angular/core';
import {PlanData} from './../../mock/Plan-data';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  data = new PlanData();
}
