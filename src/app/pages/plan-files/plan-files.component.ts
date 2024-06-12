

import { Component, OnInit, Input } from '@angular/core';


// import { DomSanitizer } from '@angular/platform-browser';

import { ServicePlan } from 'app/@core/services/apis/plan.service';
import { IPlanFiles } from 'app/@core/interfaces/plan.interface';

type TQuery = {
  page : number,
  fileType : number
}

@Component({
  selector: 'app-plan-files',
  templateUrl: './plan-files.component.html',
  styleUrls: ['./plan-files.component.scss']
})


export class PlanFilesComponent implements OnInit {

  constructor(private servicePlan: ServicePlan) {}

  @Input() plan_ID !: number

  listFiles !: IPlanFiles[]

  query : TQuery = {
    page : 1,
    fileType : 0
  }

  ngOnInit(): void {
    this.getAllFiles()
  }


  getAllFiles() {
    this.servicePlan.handleGetAllFiles(this.plan_ID, this.query)
    .subscribe({
          next: this.handleSuccess.bind(this),
          error: this.handleFailed.bind(this),
        });
  }


  downLoadFile(name : string ) {
    this.servicePlan.handleDownloadFile(name).subscribe((res) => {
      console.log(res);
      const blob = new Blob([res], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    })
  }

  protected handleFailed(res : any) {
    console.log(res);
    alert('Failed');
  }

  protected handleSuccess (res : any) {
    this.listFiles = res.data;
  }


  delFile(id : number) {

    console.log(id);
    
    if(confirm("Chắc Chắn Muốn Xóa ?")) {
      this.servicePlan.handleDelFile(id).subscribe({ 
        next: this.delSuccess.bind(this),
        error: this.handleFailed.bind(this)
      }
      )
    }

  }


    delSuccess(res) {
      alert(res.message)
      this.getAllFiles()
    }

  
}



