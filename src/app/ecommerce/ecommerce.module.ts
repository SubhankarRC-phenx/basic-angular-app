import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { MatButtonModule } from '@angular/material/button';
import { EcommerceHeaderComponent } from './ecommerce-header/ecommerce-header.component';
import { EcommerceAboutComponent } from './ecommerce-about/ecommerce-about.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { CardBoxComponent } from './card-box/card-box.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    EcommerceComponent,
    EcommerceHeaderComponent,
    EcommerceAboutComponent,
    CardBoxComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,

    MatChipsModule
  ]
})
export class EcommerceModule { }
