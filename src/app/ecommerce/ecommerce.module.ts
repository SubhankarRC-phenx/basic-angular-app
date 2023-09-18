import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { MatButtonModule } from '@angular/material/button';
import { EcommerceHomeComponent } from './ecommerce-home/ecommerce-home.component';
import { EcommerceHeaderComponent } from './ecommerce-header/ecommerce-header.component';
import { EcommerceAboutComponent } from './ecommerce-about/ecommerce-about.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    EcommerceHomeComponent,
    EcommerceHeaderComponent,
    EcommerceAboutComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    MatButtonModule,
  ]
})
export class EcommerceModule { }
