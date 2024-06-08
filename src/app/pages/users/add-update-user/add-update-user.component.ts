import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from "app/@core/services/apis/user.service";
import { delay } from "app/@core/utils/role.util";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss']
})
export class AddUserComponent implements OnInit {


  titleModal : string = 'Thêm Mới Người Dùng'
  nameBtn : string = 'Thêm'
  userForm!: FormGroup;
  isLoading : boolean = false;
  idUser !: number

  constructor(
    private router: Router, 
    private userService: UserService, 
    private activeRouter: ActivatedRoute,

  ) {}

  ngOnInit(): void {

    this.activeRouter.params.subscribe(params => {
      if(params['id']) { 
        this.idUser = params['id']
      }
    });

    this.setFormData()

    if(this.idUser) {
      this.titleModal = 'Chỉnh Sửa Người Dùng'
      this.nameBtn = 'Cập Nhật'
      this.handleGetOneUser(this.idUser)
    }
  }

  setFormData() {
    this.userForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      id: new FormControl(null),
      role_ID: new FormControl(0, Validators.required),
      last_name: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if(!this.idUser) {
        this.handleAddUser()
      }else {
        this.handleUpdateUser()
      }
    }
  }

  handleAddUser() {
    this.userService.createUser(this.userForm.value)
    .pipe()
        .subscribe({
          next:this.handleSuccess.bind(this),
          error: this.handleFailed.bind(this),
        });
  }

  handleUpdateUser() {
      this.userService.updateUser(this.userForm.value).subscribe((res) => {
        console.log(res);
        if(res && res.success) { 
          this.handleSuccess(res)
        }else { 
          this.handleFailed(res)
        } 
      })
  }

  async handleGetOneUser(id : number) {
    this.isLoading = true;
    await delay(1000)

    this.userService.getOneUser(id).subscribe((res) => {
      if (res && res.success) {
        let user = res.data
        console.log(user);

        console.log(this.userForm);
        this.userForm.controls["id"].setValue(user.id);
        this.userForm.controls["first_name"].setValue(user.first_name);
        this.userForm.controls["last_name"].setValue(user.last_name);
        this.userForm.controls["email"].setValue(user.email);
        this.userForm.controls["role_ID"].setValue(user.role_ID);
        this.userForm.controls["password"].setValue('********');

        this.isLoading = false;
      }
    });
  }

  protected handleSuccess(res : any) : void {
    if(!this.idUser) {this.userForm.reset()}
    alert(res.message);
  }

  protected handleFailed(res : any) {
    alert(res.error.message);
  }
}


