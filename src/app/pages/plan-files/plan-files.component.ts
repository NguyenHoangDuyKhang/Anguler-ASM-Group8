

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-plan-files',
  templateUrl: './plan-files.component.html',
  styleUrls: ['./plan-files.component.scss']
})


export class PlanFilesComponent implements OnInit {

  files: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  
  // prop
  @Input() plan_ID : number = 0

  constructor() {

  }

  ngOnInit(): void {

    console.log('plan id >>>>',  this.plan_ID);
    
  }
}



