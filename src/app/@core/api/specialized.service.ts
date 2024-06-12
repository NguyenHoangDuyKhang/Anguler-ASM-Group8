import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceSpecialized {
  url = 'http://localhost:8181/api/';
  constructor( private http: HttpClient ) { }

  getAll():Observable<any> {
    return this.http.get(this.url + `specialized`)
  }

  getOne(id:number| 0 ):Observable<any> {
    return this.http.get(this.url + `specialized/` + id)
  }

  postData(data: any ):Observable<any> {
    return this.http.post(this.url + 'specialized' , data)
  }

  deleteData(id: number): Observable<any>{
    return this.http.delete(this.url+ `specialized/` + id)
  }

  update(id:number, data:any):Observable<any>{
    return this.http.put(this.url + 'specialized/' + id, data);
  }
}
