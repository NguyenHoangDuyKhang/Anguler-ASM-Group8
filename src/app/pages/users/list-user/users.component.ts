import { Component, OnInit, Output } from '@angular/core';
import { IListUser } from 'app/@core/interfaces/user.inrterface';
import { UserService } from 'app/@core/services/apis/user.service';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';

import { AddUserComponent } from '../add-update-user/add-update-user.component';

import { delay } from 'app/@core/utils/role.util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsers: IListUser = []

  pagination = {
    page : 1,
    last_page : 0,
    apiUrl : 'http://localhost:8181/api/users'
  }
  keysearch : string = ''

  isLoading = false

  constructor(
    private userService: UserService, 
    private dialogService: NbDialogService, 
    private toastrService: NbToastrService,

  ) { }

  ngOnInit(): void {
    this.handleGetAllUsers()
  }

  onDataChanged(data : any) {
    console.log(data);
    
    this.setState(data.data, data.pagination)
    if(data.keywords) {
      this.keysearch = data.keywords
    }
  }

  async handleGetAllUsers() {

    this.isLoading = true
    await delay(500)

    this.userService.handleGetAllUsers(this.pagination.page).subscribe((res) => {
      if (res && res.success) {
        this.setState(res.data, res.pagination)
        this.isLoading = false
      }
    });
  }
  

  async handleDelUser (id: number) {

    if(confirm('Bạn chắc chắn muốn xóa')) {
      this.userService.delUser(id).subscribe((res) => {
        if (res && res.success) {
          this.showToast('success', res.message)
          this.handleGetAllUsers()
        }
      });
    }
    

    
  }

  setState( data : IListUser , pagination: any) {
    this.listUsers = data
    this.pagination.page = pagination.page
    this.pagination.last_page = pagination.last_page
    this.pagination.apiUrl = pagination.apiUrl
  }

  showToast(status: NbComponentStatus, message: string) {
    this.toastrService.show(status, message, { status });
  }

}
