import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'personal',
    loadChildren: './features/personal/personal.module#PersonalModule'
  },
  {
    path: 'treatment',
    loadChildren: './features/treatment/treatment.module#TreatmentModule'
  },
  {
    path: '',
    loadChildren: './features/welcome/welcome.module#WelcomeModule'
  },
  // 404 error - tout le reste qui n'est pas trouvé
  // {
  //   path: '**/*',  
  //   loadChildren: './features/welcome/welcome.module#WelcomeModule'
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
