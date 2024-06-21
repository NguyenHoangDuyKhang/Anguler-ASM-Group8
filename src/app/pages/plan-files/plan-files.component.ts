

import { Component, OnInit, Input } from '@angular/core';


// import { DomSanitizer } from '@angular/platform-browser';

import { ServicePlan } from 'app/@core/services/apis/plan.service';
import { IPlanFiles } from 'app/@core/interfaces/plan.interface';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
import { ModalFileComponent } from 'app/@theme/components/modal-file/modal-file/modal-file.component';

@Component({
  selector: 'app-plan-files',
  templateUrl: './plan-files.component.html',
  styleUrls: ['./plan-files.component.scss']
})


export class PlanFilesComponent implements OnInit {

  constructor(
    private servicePlan: ServicePlan, 
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,

   ) { }

  @Input() plan_ID !: number

  listFiles = []
  query = {
    page: 1,
    limit : 6,
    fileType: 0
  }
  lastPage : number = 0
  total : number = 0

  ngOnInit(): void {
    this.getAllFiles(this.plan_ID, this.query)
  }

  getAllFiles(plan_ID : number, query : any) {
    this.servicePlan.handleGetAllFiles(plan_ID, query)
      .subscribe({
        next: this.handleGetFilesSuccess.bind(this),
        error: this.handleFailed.bind(this),
      });
  }

  protected handleFailed(res: any) {
    console.log(res);
    alert('Failed');
  }

  protected handleGetFilesSuccess(res: any) {
    this.listFiles = res.data    
    this.query.page = res.pagination.page;
    this.lastPage = res.pagination.last_page
    this.total = res.pagination.total_items
  }

  delFile(id: number) {
    if (confirm("Chắc Chắn Muốn Xóa ?")) {
      this.servicePlan.handleDelFile(id).subscribe({
        next: this.delSuccess.bind(this),
        error: this.handleFailed.bind(this)
      })
    }
  }

  delSuccess(res : any) {

    this.total = res.data.total_items

    // set lại last page 
    this.lastPage = Math.ceil(this.total / Number(this.query.limit));

    this.showToast('success', res.message)


    let index = this.listFiles.findIndex((item) => item.id === res.data.delete_file.id)
    if (index !== -1) {
      this.listFiles.splice(index, 1);
    }
    if(this.total % this.query.limit === 0) {
      this.seeMore(this.query.page)
      console.log(this.lastPage, this.query.page, this.total);
    }

    
  }


  seeMore(seeMore: number) {
    let nextPage = seeMore + 1
    this.query.page = nextPage

    if(this.query.page > this.lastPage) {
      this.query.page = this.lastPage
    }

    this.servicePlan.handleGetAllFiles(this.plan_ID, this.query)
    .subscribe((res) => {

      // cut array slice == page - 1 
      // push item page == 2 > array
      let indexList = (this.query.page - 1) * this.query.limit
      this.listFiles = this.listFiles.slice(0, indexList);

      console.log("indexList", indexList);
      
      this.listFiles.push(...res.data)
    });
  }

  downLoadFile(name: string) {
    this.servicePlan.handleDownloadFile(name).subscribe((res) => {

        // const blob = new Blob([res], { type: 'application/zip' });
        const blob = new Blob([res], { type: res.type });
        const url = window.URL.createObjectURL(blob);
        var anchor = document.createElement("a");
        anchor.download = name;
        anchor.href = url;
        anchor.click();
      
    })
  }

  // call api when upload success with page = 1
  openModal() {
    this.dialogService.open(ModalFileComponent, {
      context: {
        fileType: this.query.fileType,
        plan_ID: this.plan_ID
      },
    }).onClose.subscribe((data) => {
      if (data && data.length > 0) {
        this.query.page = 1
        this.servicePlan.handleGetAllFiles(this.plan_ID, this.query)
        .subscribe((res) => {
            this.listFiles = res.data
            this.query.page = res.pagination.page;
            this.lastPage = res.pagination.last_page
            this.total = res.pagination.total_items
            console.log(this.listFiles, this.query, this.total, this.lastPage);
        });
      }
      
    });
  }

  showToast(status: NbComponentStatus, message: string) {
    this.toastrService.show(status, message, { status });
  }



}



