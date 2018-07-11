import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHttpService } from './services/generic-http.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[
    GenericHttpService
  ]
  
})
export class SharedModule { }
