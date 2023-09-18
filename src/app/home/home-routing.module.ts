import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  },
  {
    path : 'ecommerce',
    loadChildren : () =>
    import('./../ecommerce/ecommerce.module').then(
      (m) => m.EcommerceModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
