import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
  categorylist: any;

  constructor(){}


  ngOnInit(): void {
    this.categorylist  = [
      {
        "Item" : "001",
        "name" : "Headphone"
      },
      {
        "Item" : "002",
        "name" : "Bluetooth"
      },
      {
        "Item" : "003",
        "name" : "Bluetooth"
      }
    ]
  }

}
