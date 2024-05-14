import { Component } from '@angular/core';

import {ClassData} from './../../mock/class-data';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent {
  data = new ClassData();
}
