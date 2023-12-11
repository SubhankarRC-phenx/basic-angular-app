import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ecommerce-gallery',
  templateUrl: './ecommerce-gallery.component.html',
  styleUrls: ['./ecommerce-gallery.component.scss']
})
export class EcommerceGalleryComponent implements OnInit{


  public name = "geek2";
  public age = 22;


  @Output() data = new EventEmitter<{name:string, age:number}>();

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  send_name_age()
  {

  /* we will wrap the parameters
     to be sent inside the curly brackets.*/

    // this.data.emit({name:this.name, age:this.age});

  }
}
