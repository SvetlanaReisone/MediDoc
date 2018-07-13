import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { FormsModule } from '@angular/forms';

import { PersonalPageComponent } from './containers/personal-page/personal-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule,
    FormsModule
  ],
  declarations: [PersonalPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonalModule { }
