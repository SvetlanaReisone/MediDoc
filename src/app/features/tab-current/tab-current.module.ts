import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabCurrentRoutingModule } from './tab-current-routing.module';
import { TabCurrentComponent } from './containers/tab-current/tab-current.component';

@NgModule({
  imports: [
    CommonModule,
    TabCurrentRoutingModule
  ],
  declarations: [TabCurrentComponent]
})
export class TabCurrentModule { }
