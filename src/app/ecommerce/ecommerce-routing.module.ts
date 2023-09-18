import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceHomeComponent } from './ecommerce-home/ecommerce-home.component';
import { EcommerceAboutComponent } from './ecommerce-about/ecommerce-about.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo: 'ecommerce-dashboard'
  },
  {
    path : 'ecommerce-dashboard', component : EcommerceComponent,
    children:[
      {
        path: 'ecommerce-home', component : EcommerceHomeComponent
      },
      {
        path: 'ecommerce-about', component : EcommerceAboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
