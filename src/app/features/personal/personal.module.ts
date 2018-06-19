import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalPageComponent } from './containers/personal-page/personal-page.component';

@NgModule({
  imports: [
    CommonModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalPageComponent]
})
export class PersonalModule { }
