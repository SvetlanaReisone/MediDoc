import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabCurrentComponent} from './containers/tab-current/tab-current.component'

const routes: Routes = [
  {
    path: '',
    outlet: 'curr',
    component: TabCurrentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabCurrentRoutingModule { }
