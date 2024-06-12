import { Component, OnInit } from '@angular/core';
import { PlanData } from './../../mock/Plan-data';
import introJs from 'intro.js/intro.js';
import { NbDialogService } from '@nebular/theme';
import { ServicePlan } from '../../@core/services/apis/plan.service';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  listData: [] = [];
  last_Page: number = 0;
  cur_Page: number = 0;
  API_URL:string = 'http://localhost:8181/api/plans';
  constructor(
    private dialogService: NbDialogService,
    private unit: ServicePlan
  ) {}
  data = new PlanData();
  ngOnInit(): void {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          title: 'Welcome',
          intro: 'Xin Chào! 👋',
        },
        {
          title: 'Cùng tôi đi xem có gì nhá!',
          intro:
            '<img src="https://i.giphy.com/media/ujUdrdpX7Ok5W/giphy.webp" onerror="this.onerror=null;this.src=\'https://i.giphy.com/media/E6jscXfv3AkWQ/giphy.webp\';" alt="">',
        },
        {
          element: document.querySelector('nb-card-body'),
          intro: 'Cái thanh này là cái gì?',
        },
        {
          element: document.querySelector('nb-card-header'),
          intro: 'Đây là thanh tìm kiếm',
        },
        {
          element: document.querySelector('table'),
          intro: 'Đây là danh sách dùng để quản lý đề án',
        },
      ],
    });

    const lastExitTime = localStorage.getItem('lastExitTime');

    if (!lastExitTime || Date.now() - Number(lastExitTime) > 60 * 60 * 1000) {
      intro.start();
      localStorage.setItem('lastExitTime', String(Date.now()));
      return;
    }
    
    this.getAll();
    
  }
  getPage(res: any){
    console.log(res);
    this.listData = res.data;
  }
  getAll() {
    this.unit.getAll().subscribe(
      (res) => {
        this.listData = res.data;
        this.cur_Page = res.pagination.currentPage;
        this.last_Page = res.pagination.lastPages;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
