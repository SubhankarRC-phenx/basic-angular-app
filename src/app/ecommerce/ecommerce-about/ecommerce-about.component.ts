import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

}
