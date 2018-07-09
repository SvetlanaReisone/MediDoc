import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalPageComponent}  from './containers/';

const routes: Routes = [
    {path: ':personid',
    component: PersonalPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
