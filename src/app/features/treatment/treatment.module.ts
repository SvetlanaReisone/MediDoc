import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentRoutingModule } from './treatment-routing.module';
import { TreatmentPageComponent } from './containers/treatment-page/treatment-page.component';

@NgModule({
  imports: [
    CommonModule,
    TreatmentRoutingModule
  ],
  declarations: [TreatmentPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreatmentModule { }
