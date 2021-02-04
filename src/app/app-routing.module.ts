import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';

const routes: Routes = [
  { path: 'first-component', component: Q1Component },
  { path: 'second-component', component: Q2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
