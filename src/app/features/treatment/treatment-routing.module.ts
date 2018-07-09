import { NgModule  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentPageComponent } from './containers/treatment-page/treatment-page.component';

const routes: Routes = [
  {
    path: ':personid',
    component: TreatmentPageComponent,
    children: [
      {
        path: 'curr',
        outlet: 'curr',
        loadChildren: '../tab-current/tab-current.module#TabCurrentModule'
      },
      {
        path: 'hist',
        outlet: 'hist',
        loadChildren: '../tab-history/tab-history.module#TabHistoryModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/:personid/(curr:curr)'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentRoutingModule { }
