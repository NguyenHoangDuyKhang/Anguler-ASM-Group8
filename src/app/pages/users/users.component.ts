import { Component } from '@angular/core';
import { IUser } from 'app/@core/interfaces/user.inrterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  listUsers : IUser[] = [
    { id: 1, firstName: 'John', lastName : 'devt', email: 'Jon@gmail.com', role: 0, role_name: 'Admin' },
    { id: 2, firstName: 'Heve', lastName : 'devt', email: 'Jon@gmail.com', role: 0, role_name: 'User' },
    { id: 3, firstName: 'HiHa', lastName : 'devt', email: 'Jon@gmail.com', role: 0, role_name: 'User' },
    { id: 4, firstName: 'Devt', lastName : 'devt', email: 'Jon@gmail.com', role: 0, role_name: 'User' },
    { id: 5, firstName: 'Athc', lastName : 'devt', email: 'Jon@gmail.com', role: 0, role_name: 'User' },
    { id: 6, firstName: 'Belong', lastName : 'devt', email: 'Jon@gmail.com', role: 0, role_name: 'User' },
    {
      id: 7,
      firstName: 'Duck',
      lastName : 'devt',
      email: 'Jon@gmail.com',
      role: 0,
      role_name: 'User',
    },
  ]

  constructor() {}



  // smart table 
  // settings = {
  //   // selectMode: 'multi',
  //   add: {
  //     addButtonContent: '<i class="nb-plus"></i>',
  //     createButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   edit: {
  //     editButtonContent: '<i class="nb-edit"></i>',
  //     saveButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //     confirmDelete: true,
  //   },

  //   columns: {
  //     id: {
  //       title: 'ID',
  //       type: 'number',
  //     },
  //     firstName: {
  //       title: 'First Name',
  //       type: 'string',
  //     },
  //     lastName: {
  //       title: 'Last Name',
  //       type: 'string',
  //     },
  //     email: {
  //       title: 'E-mail',
  //       type: 'string',
  //     },
  //     password: {
  //       title: 'password',
  //       type: 'any',
  //     }
  //   },
  // };
}
