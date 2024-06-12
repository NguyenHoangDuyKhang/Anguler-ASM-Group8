import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicePlan } from 'app/@core/services/apis/plan.service';


@Component({
  selector: 'app-modal-file',
  templateUrl: './modal-file.component.html',
  styleUrls: ['./modal-file.component.scss']
})

export class ModalFileComponent {

  @Input() plan_ID: number;
  @Input() fileType: number;
  file : FileList

  constructor(
    private router: Router, 
    private servicePlan: ServicePlan, 
    private activeRouter: ActivatedRoute,

  ) {}

  ngOnInit(): void {

    console.log(this.fileType);
    console.log(this.plan_ID);
  }

  onSubmit() {
    console.log(this.plan_ID);
    console.log(this.fileType);


 
  }

  onImagePicked(event: Event) {
    // this.file = (event.target as HTMLInputElement).files[0]

    let file = (event.target as HTMLInputElement).files[0]

    
    const formData1 : FormData = new FormData();

    console.log(file);

    formData1.append('file', file, file.name)

    console.log(formData1);


    this.servicePlan.handleAddFile(formData1)
    .pipe()
        .subscribe({
          next:this.handleSuccess.bind(this),
          error: this.handleFailed.bind(this),
        });
  }

  AddFile() {


    // console.log(this.file, this.file.name);
    
    
    // const formData1 : FormData = new FormData();
    // formData1.set('file', this.file, this.file.name)

    // console.log(formData1);


    // this.servicePlan.handleAddFile(formData1)
    // .pipe()
    //     .subscribe({
    //       next:this.handleSuccess.bind(this),
    //       error: this.handleFailed.bind(this),
    //     });
  }

  protected handleSuccess(res : any) : void {

    console.log(res);
    
    //   this.modalFileForm.reset()
    // alert(res.message);
  }

  protected handleFailed(res : any) {
    console.log(res);
    
    // alert(res.error.message);
  }

}
