import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus, NbDialogRef, NbToastrService } from '@nebular/theme';

import { ServicePlan } from 'app/@core/services/apis/plan.service';

import { TYPE_FILES } from 'app/@core/utils/role.util';

@Component({
  selector: 'app-modal-file',
  templateUrl: './modal-file.component.html',
  styleUrls: ['./modal-file.component.scss']
})

export class ModalFileComponent {

  @Input() plan_ID: number;
  @Input() fileType: number;
  listFile = []

  @Output() lastesData: EventEmitter<any> = new EventEmitter();


  constructor(
    private router: Router,
    private servicePlan: ServicePlan,
    private toastrService: NbToastrService,
    private activeRouter: ActivatedRoute,
    protected ref: NbDialogRef<ModalFileComponent>

  ) { }

  ngOnInit(): void {

    console.log('type s', this.fileType);
    console.log('planID', this.plan_ID);
  }

  onSubmit() {
    this.AddFile()
  }

  onImagePicked(event: Event) {

    let fileInput = (event.target as HTMLInputElement).files

    if(this.fileType === TYPE_FILES.file) {
      for (var i = 0; i < fileInput.length; i++) {
        if(fileInput[i].type == 'image/jpg' || fileInput[i].type == 'image/png' || fileInput[i].type === 'image/jpeg') {
          this.showToast('danger', 'Sai định dạng')
          this.ref.close()
          break;

        }else {
          console.log('push');
          
          this.listFile.push(fileInput[i]);
        }
      }
    }


    if(this.fileType === TYPE_FILES.image) {
      for (var i = 0; i < fileInput.length; i++) {
        if(fileInput[i].type == 'image/jpg' || fileInput[i].type == 'image/png' || fileInput[i].type == 'image/jpeg') {
          this.listFile.push(fileInput[i]);
        }else {
          this.showToast('danger', 'Sai định dạng')

          this.ref.close()
          break;
        }
      }
    }
  }

  AddFile() {

    const frmData = new FormData();
    frmData.append("plan_ID", this.plan_ID.toString());
    frmData.append("fileType", this.fileType.toString());

    for (var i = 0; i < this.listFile.length; i++) {
      frmData.append("file", this.listFile[i]);
    }

    this.servicePlan.handleAddFile(frmData)
      .pipe()
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleFailed.bind(this),
      });

  }

  protected handleSuccess(res: any): void {
    this.lastesData = res.data
    this.showToast('success', res.message)

    this.ref.close(this.lastesData);
  }

  protected handleFailed(res: any) {
    console.log(res);
    // alert(res.error.message);
  }
  
  showToast(status: NbComponentStatus, message: string) {
    this.toastrService.show(status, message, { status });
  }

}
