import { NgModule  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentPageComponent } from './containers/treatment-page/treatment-page.component';

const routes: Routes = [
  {
    path: ':personid',
    component: TreatmentPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentRoutingModule { }
