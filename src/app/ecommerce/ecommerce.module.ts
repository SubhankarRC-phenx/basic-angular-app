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
import { MatFormField } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogInventoryPriorityComponent } from './ecommerce-about/dialog-inventory-priority/dialog-inventory-priority.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    EcommerceHeaderComponent,
    EcommerceAboutComponent,
    CardBoxComponent,

    DialogInventoryPriorityComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule
  ]
})
export class EcommerceModule { }
