import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE_URL } from 'app/@core/config/api-endpoint.config';
import { API_ENDPOINT } from 'app/@core/config/api-endpoint.config';

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



  // Files
  // ////////////////////////////////////////////////////////////////////////////////////



  // queryParams need = { type, pages }
  handleGetAllFiles(plan_ID : number, queryParams : any) : Observable<any>  {
    
    let qParams = `?type=${queryParams.fileType}&plan_ID=${plan_ID}&page=${queryParams.page}&limit=${queryParams.limit}`

    return this.http.get(API_BASE_URL + API_ENDPOINT.plan.getAllFiles + qParams);
  } 

  handleDownloadFile(name : string) : Observable<any> {
   const headers = { 'responseType': 'blob' as 'json'};
    return this.http.get<Blob>(API_BASE_URL + API_ENDPOINT.plan.downloadFile + name, headers);
  }

  handleAddFile(data : any) :  Observable<any> {
    return this.http.post(API_BASE_URL + API_ENDPOINT.plan.addFile, 
      data
    )

  }


  handleDelFile(id : number) : Observable<any> {
    return this.http.delete(API_BASE_URL + API_ENDPOINT.plan.delFile + id);
  } 


}
