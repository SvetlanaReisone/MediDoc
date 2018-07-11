import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabHistoryComponent} from './containers/tab-history/tab-history.component';

const routes: Routes = [
  {
    path: '',
    outlet: 'hist',
    component: TabHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabHistoryRoutingModule { }
