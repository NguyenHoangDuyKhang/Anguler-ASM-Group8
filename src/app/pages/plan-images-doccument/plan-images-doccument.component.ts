import { Component, Input, OnInit  } from '@angular/core';


import { ServicePlan } from 'app/@core/services/apis/plan.service';
import { API_BASE_URL } from 'app/@core/config/api-endpoint.config';


import { ModalFileComponent } from 'app/@theme/components/modal-file/modal-file/modal-file.component';
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'app-plan-images-doccument',
  templateUrl: './plan-images-doccument.component.html',
  styleUrls: ['./plan-images-doccument.component.scss']
})

export class PlanImagesDoccumentComponent implements OnInit {

  images = []

  apiUrl = API_BASE_URL
  
  @Input() plan_ID : number = 0

  constructor(private servicePlan : ServicePlan, private dialogService: NbDialogService) {}

  query = {
    page : 1,
    fileType : 1,
    limit : 6
  }

  lastPage : number = 0
  total : number = 0
  

  ngOnInit(): void {
    this.getAllFiles(this.plan_ID, this.query);
  }


  getAllFiles(plan_ID: number , query :any) {
    this.servicePlan.handleGetAllFiles(this.plan_ID, this.query)
    .subscribe({
          next: this.handleSuccess.bind(this),
          error: this.handleFailed.bind(this),
        });
  }

  handleFailed(res : any) {
    console.log('Đã có lỗi xãy ra vui lòng thử lại');
  }

  handleSuccess (res : any) {
    console.log(res);
    this.images = res.data
    this.query.page = res.pagination.page;
    this.lastPage = res.pagination.last_page
    this.total = res.pagination.total_items
    console.log(this.images, this.query);
  }

  seeMore(seeMore: number) {
      let nextPage = seeMore + 1
      this.query.page = nextPage
      this.servicePlan.handleGetAllFiles(this.plan_ID, this.query)
      .subscribe((res) => {
        this.images.push(...res.data)
      });
  }

  openModal() {
    this.dialogService.open(ModalFileComponent, {
      context: {
        fileType: this.query.fileType,
        plan_ID : this.plan_ID
      },
    }).onClose.subscribe((data) => {

      if(data && data.length > 0) { 
        this.query.page = 1
        this.getAllFiles(this.plan_ID, this.query);
      }
    });
  }

 
}
