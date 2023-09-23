import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceHomeRoutingModule } from './ecommerce-home-routing.module';
import { EcommerceHomeComponent } from './ecommerce-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


@NgModule({
  declarations: [
    EcommerceHomeComponent,

    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    EcommerceHomeRoutingModule,

    MatButtonModule,
    MatDialogModule,
    MatIconModule

  ]
})
export class EcommerceHomeModule { }
