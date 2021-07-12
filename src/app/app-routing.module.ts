import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaynicFromComponent } from './daynic-from/daynic-from.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch: 'full',
  },
  {
    path:'d',
    component:DaynicFromComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
