import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent}  from './containers/';

const routes: Routes = [
  {
    path: 'index',
    component: WelcomePageComponent
  },

  {
      path: '',
      redirectTo: '/index'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
