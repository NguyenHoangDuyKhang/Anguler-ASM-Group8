import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicePlan {
  url = 'http://localhost:8181/api/';
  constructor( private http: HttpClient ) { }

  getAll():Observable<any> {
    return this.http.get(this.url + `plans`)
  }

  getAllspecialized():Observable<any> {
    return this.http.get(this.url + 'specialized')
  }
  getAllUser():Observable<any> {
    return this.http.get(this.url + 'users?page=1')
  }

  getOne(identifier: number | string ):Observable<any> {
    return this.http.get(this.url + `plans/` + identifier)
  }

  postData(data: any ):Observable<any> {
    return this.http.post(this.url +'plans' , data)
  }

  deleteData(id: number): Observable<any>{
    return this.http.delete(this.url+ `plans/` + id)
  }

  update(id:number, data:any):Observable<any>{
    return this.http.put(this.url + 'plans/' + id, data);
  }
}
