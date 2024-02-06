import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import {AssetDataService} from './../../services/asset-data.service'
import { data } from 'jquery';

@Component({
  selector: 'app-ecommerce-home',
  templateUrl: './ecommerce-home.component.html',
  styleUrls: ['./ecommerce-home.component.scss']
})
export class EcommerceHomeComponent implements OnInit{

  assetType:any
  constructor(
    // public dialog: MatDialog,
    // private assetData: AssetDataService,
    ){
      // assetData.assetType().subscribe((data) =>{
      //   console.warn("data",data);
      //   this.assetData=data

      // });
    }

  ngOnInit(): void {
  }


  // openDialog() {
  //   const dialogRef = this.dialog.open(RegistrationFormComponent,{
  //     maxWidth:'100vw',
  //     panelClass:'registration_form_panel_class',
  //     hasBackdrop:false,
  //     data:{
  //       title:'Registration Form',
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
