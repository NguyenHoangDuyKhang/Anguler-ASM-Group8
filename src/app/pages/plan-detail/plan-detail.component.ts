import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


import { IPlans } from '../../@core/interfaces/plan.interface';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit {

  planDetail : IPlans = {
    id : 1,
    name : 'Đề Án 1',
    slug : 'de-an-1',
    author : 'Thanh Nam',
    status : 0,
    status_name : 'Chưa Triển Khai',
    category : 'Đề án giáo dục',
    specialize : 'Công Nghệ Thông Tin',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam est dolorem delectus molestias impedit. Consequuntur vitae aliquid, ad rerum architecto autem impedit ut deleniti quaerat distinctio temporibus quibusdam eius? ',
    createdAt : '2017-10-21',
    updatedAt : '2017-10-22',
    publishedAt : null,
    finishedAt : null
  }

  slug : string = ''

  constructor(private router: Router ) { }

  // get router slug
  ngOnInit(): void {
    this.slug = this.router.url.split('/').pop();
    console.log(this.slug);
  }

  handleGetPlanBySlug() {
    
  }



}
