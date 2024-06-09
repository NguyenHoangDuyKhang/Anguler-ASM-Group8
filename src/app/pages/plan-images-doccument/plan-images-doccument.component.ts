import { Component, Input, OnInit  } from '@angular/core';
import { IPlanImages } from 'app/@core/interfaces/plan.interface';

@Component({
  selector: 'app-plan-images-doccument',
  templateUrl: './plan-images-doccument.component.html',
  styleUrls: ['./plan-images-doccument.component.scss']
})
export class PlanImagesDoccumentComponent implements OnInit {

  images : IPlanImages[] = [
    {id : 1, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 2, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 3, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
    {id : 4, url: 'https://i.pinimg.com/736x/0c/f7/66/0cf76619231c6184873fd89753ade3ef.jpg'},
  ]
  
  // prop
  @Input() plan_ID : number = 0

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('plan id >>>>',  this.plan_ID);
    
  }
}
