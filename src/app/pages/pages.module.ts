import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MainModule
  ]
})
export class PagesModule { }
