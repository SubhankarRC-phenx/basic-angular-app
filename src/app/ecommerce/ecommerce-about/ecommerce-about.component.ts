import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogInventoryPriorityComponent } from './dialog-inventory-priority/dialog-inventory-priority.component';

@Component({
  selector: 'app-ecommerce-about',
  templateUrl: './ecommerce-about.component.html',
  styleUrls: ['./ecommerce-about.component.scss']
})
export class EcommerceAboutComponent implements OnInit{


  newSalesVoucher = new FormGroup({
    id: new FormControl(),
    paid_from_account_name_id: new FormControl(null, Validators.required),
  });

  constructor(

    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ){

  }
  ngOnInit(): void {

  }


  openConfirmationDialog(){

    console.log(this.newSalesVoucher.valid);
    if (!this.newSalesVoucher.valid) {
      this._snackBar.open('Please fill all required field(s)');
      return;
    }
    console.log(this.newSalesVoucher.value);

  }


  openDialogCreatePriority(): void{
    const dialogRef = this.dialog.open(DialogInventoryPriorityComponent,{
      maxWidth:'100vw',
      panelClass:'panelclass_create_priority',
      disableClose:true,
      data:{
        title:'Create Priority',
        btn_title:'Create'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
