import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFileComponent } from './modal-file/modal-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ModalFileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule
  ],
  exports: [
    ModalFileComponent
  ]
})
export class ModalFileModule { }
