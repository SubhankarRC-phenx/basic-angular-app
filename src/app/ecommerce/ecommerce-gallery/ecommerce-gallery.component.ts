import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AssetDataService} from './../../services/asset-data.service'

@Component({
  selector: 'app-ecommerce-gallery',
  templateUrl: './ecommerce-gallery.component.html',
  styleUrls: ['./ecommerce-gallery.component.scss']
})
export class EcommerceGalleryComponent implements OnInit{


  public name = "geek2";
  public age = 22;


  @Output() data = new EventEmitter<{name:string, age:number}>();

  constructor(
// public dialog: MatDialog,
    // private assetData: AssetDataService,
  ){

  }

  ngOnInit(): void {
    // this.assetData.assetType().subscribe((data) =>{
    //   console.warn("data",data);
    //   this.assetData=data

    // });
  }



  // send_name_age()
  // {

  // /* we will wrap the parameters
  //    to be sent inside the curly brackets.*/

  //   // this.data.emit({name:this.name, age:this.age});

  // }
}
