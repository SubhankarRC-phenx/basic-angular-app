import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@Component({
  selector: 'app-ecommerce-home',
  templateUrl: './ecommerce-home.component.html',
  styleUrls: ['./ecommerce-home.component.scss']
})
export class EcommerceHomeComponent implements OnInit{

  constructor(
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(RegistrationFormComponent,{
      maxWidth:'100vw',
      panelClass:'registration_form_panel_class',
      hasBackdrop:false,
      data:{
        title:'Registration Form',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
