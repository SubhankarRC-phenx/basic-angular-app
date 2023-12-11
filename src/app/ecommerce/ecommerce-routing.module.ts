import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceHomeComponent } from './ecommerce-home/ecommerce-home.component';
import { EcommerceAboutComponent } from './ecommerce-about/ecommerce-about.component';
import { EcommerceGalleryComponent } from './ecommerce-gallery/ecommerce-gallery.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo: 'ecommerce-home' //ecommerce-dashboard
  },
  // ecommerce-dashboard
  {
    path : '', component : EcommerceComponent,
    children:[
      // {
      //   path: 'ecommerce-home', component : EcommerceHomeComponent
      // },
      {
        path : 'ecommerce-home',
        loadChildren : () =>
        import('./ecommerce-home/ecommerce-home.module').then(
          (m) => m.EcommerceHomeModule
        ),
      },
      {
        path: 'ecommerce-about', component : EcommerceAboutComponent
      },
      {
        path: 'ecommerce-gallery', component : EcommerceGalleryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
