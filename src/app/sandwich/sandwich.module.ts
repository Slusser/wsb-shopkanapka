import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
import { SandwichItemComponent } from './sandwich-item/sandwich-item.component'


@NgModule({
  declarations: [
    SandwichFormComponent,
    SandwichListComponent,
    SandwichItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SandwichFormComponent,
    SandwichListComponent,
    SandwichItemComponent
  ]
})
export class SandwichModule { }
