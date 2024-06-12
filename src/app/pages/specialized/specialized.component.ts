import { Component, TemplateRef, OnInit } from '@angular/core';
import { specializedData } from './../../mock/specialized-data';
import { NbDialogService } from '@nebular/theme';
import { ServiceSpecialized } from '../../@core/services/apis/specialized.service';

@Component({
  selector: 'app-specialized',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.scss'],
})
export class SpecializedComponent implements OnInit {
  listData: [] = [];
  GetOne: any;
  constructor(
    private dialogService: NbDialogService,
    private unit: ServiceSpecialized
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.unit.getAll().subscribe(
      (res) => {
        this.listData = res.data;
        // console.log(this.listData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOneUnit(id: number) {
    this.unit.getOne(id).subscribe(
      (res) => {
        this.GetOne = res.data;
        console.log(this.GetOne);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitForm() {
    this.update(this.GetOne.id, this.GetOne);
  }

  update(id: number, data: any) {
    this.unit.update(id, data).subscribe(
      (res) => {
        console.log('Pust Success:', res);
        console.log(res);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // open() {
  //   this.dialogService.open(DialogNamePromptComponent)
  //     .onClose.subscribe(name => name && this.names.push(name));
  // }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
    });
  }
}
