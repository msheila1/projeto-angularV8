import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';


const routes: Routes = [

 // {
   // path: "",
  //  component: AdminLayoutsComponent,
   // loadChildren: "./layouts/admin-layouts/admin-layouts.module#AdminLayoutsModule"
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
