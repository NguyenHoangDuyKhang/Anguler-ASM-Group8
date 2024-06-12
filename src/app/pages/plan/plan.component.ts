import { Component, HostBinding, Injectable, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ServicePlan } from './../../@core/api/plan.service';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class PlanComponent implements OnInit {
    //tost
    private index: number = 0;
    @HostBinding('class')
    classes = 'example-items-rows';
    // end Tost
  postData!: FormGroup;
  listData: [] = [];
  listUser: any;
  listSpecialized: any;
  dataGetOne: any;
  last_Page: number = 0;
  cur_Page: number = 0;
  API_URL: string = 'http://localhost:8181/api/plans';

  //data Post
  name: string;
  userId: number;
  specializedId:number;
  group: any;
  description: any;
  status: number = 0;
  slug: string;
  constructor(
    private dialogService: NbDialogService,
    private unit: ServicePlan,
    private router: Router,
    private toastrService: NbToastrService
  ) {}
  ngOnInit(): void {
    this.getAll();
    this.getAllUser();
    this.getAllspecialized();
    this.postData = new FormGroup({
      name: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
      specializedId: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    console.log(this.postData);
    
  }
  getPage(res: any) {
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

  getOne(id: number) {
    this.unit.getOne(id).subscribe(
      (res) => {
        this.dataGetOne = res.data;
        document.cookie = `id=${this.dataGetOne.id}; path=/`;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllUser() {
    this.unit.getAllUser().subscribe(
      (res) => {
        this.listUser = res.data;
        console.log(this.listUser);
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
        console.log(this.listSpecialized);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
    });
  }

  showToast_Danger(status: NbComponentStatus) {
    this.toastrService.show('Lỗi!', `Thông báo: ${++this.index}`, {
      status,
    });
  }

  showToast_add(status: NbComponentStatus) {
    this.toastrService.show('Thêm thành công!', `Thông báo: ${++this.index}`, {
      status,
    });
  }

  submitAdd() {
    if (this.postData.valid) {
      const data = {
        name: this.postData.value.name,
        userId: this.postData.value.userId,
        specializedId: this.postData.value.specializedId,
        group: this.postData.value.group,
        slug: this.postData.value.slug,
        status: this.status,
        description: this.postData.value.description
      };
      this.post(data);
    } else {
      this.showToast_Danger('danger');
    }
  }

  post(data: any) {
    this.unit.postData(data).subscribe(
      (res: any) => {
        console.log('Post Success:', res);
        this.getAll();
        this.showToast_add('success');
      },
      (error: any) => {
        this.showToast_Danger('danger');
        console.log(error);
      }
    );
  }
}
