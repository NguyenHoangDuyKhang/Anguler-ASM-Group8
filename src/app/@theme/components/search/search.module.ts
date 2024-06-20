import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { NbIconModule } from '@nebular/theme';
import { NbFormFieldModule } from '@nebular/theme';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    NbInputModule,
    FormsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule
    
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }

