import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject, Subscriber, debounceTime, distinctUntilChanged, finalize } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';
import { ApiService } from 'app/@core/services/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  valueInput : string
  modelChanged = new Subject<string>();
  @Input() apiUrl: string = 'http://localhost:8181/api/users';

  @Output() dataList: EventEmitter<any> = new EventEmitter();

  constructor(
    private spinner: SpinnerService,
    private apiService: ApiService,
    
  ) {  
    this.modelChanged
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);

        this.getData(value)
      })
  }

  changedValue(changes : string) {
    this.modelChanged.next(changes)
  }
  

  getValueSearch(valueInput : string): Observable<any> {
    return this.apiService.get(this.apiUrl + '?page=1' + '&keyword=' + valueInput);
  }
  getData(value) {
    this.getValueSearch(value)
        .subscribe({
          next: this.handleSuccess.bind(this),
          error: this.handleErrors.bind(this),
        });
  }

  protected handleSuccess(res) {

    let keywords = this.valueInput
    let data = {...res, keywords }
    this.dataList.emit(data);
    console.log(data);

    console.log(this.dataList);
    
    
  }

  protected handleErrors(res) {
    this.dataList.emit(res);
  }

  
}
