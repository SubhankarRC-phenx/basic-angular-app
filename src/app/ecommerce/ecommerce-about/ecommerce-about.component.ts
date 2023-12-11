import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogInventoryPriorityComponent } from './dialog-inventory-priority/dialog-inventory-priority.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ecommerce-about',
  templateUrl: './ecommerce-about.component.html',
  styleUrls: ['./ecommerce-about.component.scss']
})
export class EcommerceAboutComponent implements OnInit{



  selected_tab_index: number = 0;
  active_route_subscriber = new Subscription();

  newSalesVoucher = new FormGroup({
    id: new FormControl(),
    paid_from_account_name_id: new FormControl(null, Validators.required),
  });

  constructor(

    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private active_route: ActivatedRoute
  ){

    // Start For mat-Tab Selected tabs
    this.active_route_subscriber = this.active_route.queryParams.subscribe(
      (params) => {
        console.log(params);
        if (params['tab_index'])
          this.selected_tab_index = params['tab_index'];
      }
    );
    // End For mat-Tab Selected tabs

  }
  ngOnInit(): void {

  }


  public model = { name: "geek1", age: 24 }

  change_name_age(data:any) {

      /* Update the current model with
          the value sent by the child
          component. */
      this.model = data;
  }



  // Start For mat-Tab Selected tabs
  setTabIndex(tab_index: number): void {

    this.router.navigate([], {
      relativeTo: this.active_route,
      queryParams: {'tab_index' : tab_index},
    });
    // this.selected_tab_index = tab_index;
    // console.log(this.selected_tab_index);
  }

  onDestroy(): void {
    this.active_route_subscriber.unsubscribe();
    console.log("subscription destroyed");
  }

  // End For mat-Tab Selected tabs

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
