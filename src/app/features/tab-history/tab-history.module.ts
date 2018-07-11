import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabHistoryRoutingModule } from './tab-history-routing.module';
import { TabHistoryComponent } from './containers/tab-history/tab-history.component';

@NgModule({
  imports: [
    CommonModule,
    TabHistoryRoutingModule
  ],
  declarations: [TabHistoryComponent]
})
export class TabHistoryModule { }
