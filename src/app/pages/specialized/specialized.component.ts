import { Component } from '@angular/core';
import {specializedData} from './../../mock/specialized-data';
@Component({
  selector: 'app-specialized',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.scss']
})
export class SpecializedComponent {
  data = new specializedData();
}