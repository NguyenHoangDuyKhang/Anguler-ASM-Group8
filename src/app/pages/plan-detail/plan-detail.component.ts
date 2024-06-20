import {
  Component,
  OnInit,
  HostBinding,
  TemplateRef,
} from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ServicePlan } from 'app/@core/services/apis/plan.service';

import { IPlans } from '../../@core/interfaces/plan.interface';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
})
export class PlanDetailComponent implements OnInit {
  //tost
  private index: number = 0;
  @HostBinding('class')
  classes = 'example-items-rows';
  dataEdit: any;
  listUser: any;
  listSpecialized: any;
  data: any;
  id: any;
  slug: string = '';

  constructor(
    private router: Router,
    private unit: ServicePlan,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.slug = this.router.url.split('/').pop();
    console.log(this.slug);
    this.getOne(this.id);
    this.getAllspecialized();
  }

  
  showToast(status: NbComponentStatus) {
    this.toastrService.show('Sửa thành công', `Thông báo: ${++this.index}`, {
      status,
    });
  }


  getAllspecialized() {
    this.unit.getAllspecialized().subscribe(
      (res) => {
        this.listSpecialized = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOne(identifier: number | string) {
    this.unit.getOne(this.slug).subscribe(
      (res) => {        
        this.data = res.data;
        this.dataEdit = this.data;
        console.log('check data --> ', this.data);
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  edit(id: number, data: any) {
    this.unit.update(id, data).subscribe(
      (res) => {
        console.log('Pust Success:', res.data);
        this.showToast('success');
        this.getOne(this.id);
      },
      (error) => {
        console.log(error);
        this.showToast_Danger('danger');
      }
    );
  }

  submitForm() {
    this.edit(this.dataEdit.id, this.dataEdit);
    this.getOne(this.id);
  }

  showToast_delete(status: NbComponentStatus) {
    this.toastrService.show('Xóa thành công!', `Thông báo: ${++this.index}`, {
      status,
    });
  }

  showToast_Danger(status: NbComponentStatus) {
    this.toastrService.show('Lỗi!', `Thông báo: ${++this.index}`, {
      status,
    });
  }

  deleteUnit(id: number) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa dữ liệu này?');
    if (confirmDelete) {
      this.unit.deleteData(id).subscribe(
        (res) => {
          console.log('Delete Success:', res);
          this.showToast_delete('success');
          this.router.navigate(['/pages/plans/']);
        },
        (error) => {
          this.showToast_Danger('danger');
          console.log(error);
        }
      );
    }
  }



  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
    });
  }

  handleGetPlanBySlug() {}
}
