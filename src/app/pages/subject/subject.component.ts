import { Component } from '@angular/core';
import {subjectData} from './../../mock/subject-data';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  data = new subjectData();
}
