import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceHomeComponent } from './ecommerce-home.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo: '',
  },
  {
    path : '', component : EcommerceHomeComponent,
    // children:[

    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceHomeRoutingModule { }
