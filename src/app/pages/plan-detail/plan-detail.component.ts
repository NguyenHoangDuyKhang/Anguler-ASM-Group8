import { Component, OnInit, DoCheck, HostBinding, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ServicePlan } from 'app/@core/services/apis/plan.service';

import { IPlans } from '../../@core/interfaces/plan.interface';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit, DoCheck {
 //tost
 private index: number = 0;
 @HostBinding('class')
 classes = 'example-items-rows';
 // end Tost
  planDetail: IPlans = {
    id: 1,
    name: 'Đề Án 1',
    slug: 'de-an-1',
    author: 'Thanh Nam',
    status: 0,
    status_name: 'Chưa Triển Khai',
    category: 'Đề án giáo dục',
    specialize: 'Công Nghệ Thông Tin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam est dolorem delectus molestias impedit. Consequuntur vitae aliquid, ad rerum architecto autem impedit ut deleniti quaerat distinctio temporibus quibusdam eius? ',
    createdAt: '2017-10-21',
    updatedAt: '2017-10-22',
    publishedAt: null,
    finishedAt: null
  };
  dataEdit: any;
  listUser: any;
  listSpecialized:any;
  data: any;
  id: any;
  slug: string = '';

  constructor(private router: Router, private unit: ServicePlan,  private toastrService: NbToastrService, private dialogService: NbDialogService,) { }

  ngOnInit(): void {
    this.slug = this.router.url.split('/').pop();
    console.log(this.slug);
    this.id = this.getIdFromCookie();
    this.getOne(this.id);
    this.getAllspecialized();
    this.getAllUser();
  }

  getIdFromCookie(): number {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
    let id = 0;
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('id=')) {
        id = Number(cookie.substring(3));
        break;
      }
    }
    return id;
  }
  showToast(status: NbComponentStatus) {
    this.toastrService.show('Sửa thành công', `Thông báo: ${++this.index}`, {
      status,
    });
  }

  getAllUser() {
    this.unit.getAllUser().subscribe(
      (res) => {
        this.listUser = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
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


  getOne(id: number) {
    this.unit.getOne(id).subscribe(
      (res) => {
        this.data = res.data;
        this.dataEdit = this.data;
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
    if(confirmDelete){
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

  ngDoCheck(): void {
    const newId = this.getIdFromCookie();
    if (newId !== this.id) {
      console.log('Id đã thay đổi');
      this.id = newId;
      this.getOne(this.id);
    }
  }



  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
    });
  }

  handleGetPlanBySlug() {
  }

}