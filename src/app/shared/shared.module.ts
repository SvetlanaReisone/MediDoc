import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MedicationsPageComponent } from './components/medications-page/medications-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedicationsPageComponent],
  exports:[
    MedicationsPageComponent
  ]
  
})
export class SharedModule { }
