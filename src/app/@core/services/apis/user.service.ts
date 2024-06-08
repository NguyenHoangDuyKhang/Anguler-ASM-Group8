import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {ApiService} from "../common";
import {API_ENDPOINT} from "../../config/api-endpoint.config";
import { API_BASE_URL } from '../../config/api-endpoint.config';

import { IUserAPI, IFormAddType, IFormUpdateType } from 'app/@core/interfaces/user.inrterface';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {

  constructor(
    private _http: HttpClient,
  ) {
    super(_http);
  }

  handleGetAllUsers(page : number): Observable<IUserAPI>  {
    return this.get(API_BASE_URL + API_ENDPOINT.user.getAllUsers + `?page=${page}`);
  }

  getOneUser(id : number): Observable<any>  {
    return this.get(API_BASE_URL + API_ENDPOINT.user.getOneUser + id);
  }

  createUser(formData : IFormAddType): Observable<any>  {
    return this.post(API_BASE_URL + API_ENDPOINT.user.new, {
      ...formData
    });
  }

  updateUser(formData : IFormUpdateType): Observable<any> {
    return this.put(API_BASE_URL + API_ENDPOINT.user.update + formData.id, {
      ...formData
    });
  }

  delUser(id : number): Observable<any>  {
    return this.delete(API_BASE_URL + API_ENDPOINT.user.delete + id);
  }
  
}
