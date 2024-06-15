import { Component, TemplateRef, OnInit, HostBinding } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ServiceSpecialized } from './../../@core/api/specialized.service';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'app-specialized',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.scss'],
})
export class SpecializedComponent implements OnInit {
  //tost
  private index: number = 0;
  @HostBinding('class')
  classes = 'example-items-rows';
  // end Tost
  listData: [] = [];
  GetOne: any;
  name: any;
  qty_student: any;
  postData!: FormGroup;
  isDarkTheme: boolean = false;
  constructor(
    private dialogService: NbDialogService,
    private unit: ServiceSpecialized,
    private toastrService: NbToastrService,
    private themeService: NbThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.onThemeChange()
    .subscribe((theme) => {
      this.isDarkTheme = theme?.name === 'dark'; // Kiểm tra nếu chủ đề là 'dark'
    });
    this.getAll();
    this.postData = new FormGroup({
      name: new FormControl('', Validators.required),
      qty_student: new FormControl('', Validators.required)
    })
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show('Sửa thành công', `Thông báo: ${++this.index}`, {
      status,
    });
  }

  showToast_add(status: NbComponentStatus) {
    this.toastrService.show('Thêm thành công!', `Thông báo: ${++this.index}`, {
      status,
    });
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


  submitAdd() {
    if(this.postData.valid){
      const data = {
        name: this.name,
        qty_student: this.qty_student
      };
      this.post(data);
    } else{
      this.showToast_Danger('danger');
    }
  }

  post(data: any) {
    this.unit.postData(data).subscribe(
      (res) => {
        console.log('Post Success:', res);
        console.log(res);
        this.getAll();
        this.showToast_add('success');
      },
      (error) => {
        this.showToast_Danger('danger');
        console.log(error);
      }
    );
  }

  getAll() {
    this.unit.getAll().subscribe(
      (res) => {
        this.listData = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOne(id: number) {
    this.unit.getOne(id).subscribe(
      (res) => {
        this.GetOne = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  edit(id: number, data: any) {
    this.unit.update(id, data).subscribe(
      (res) => {
        console.log('Pust Success:', res);
        this.showToast('success');
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm() {
    this.edit(this.GetOne.id, this.GetOne);
  }

  deleteUnit(id: number) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa chuyên ngành này?');
    if(confirmDelete){
      this.unit.deleteData(id).subscribe(
        (res) => {
          console.log('Delete Success:', res);
          const index = this.listData.findIndex((item:any) => item.id === id);
          if (index !== -1) {
            this.listData.splice(index, 1); // Xóa phần tử khỏi mảng
            this.showToast_delete('success')
          }
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
  openAdd(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
    });
  }
}
