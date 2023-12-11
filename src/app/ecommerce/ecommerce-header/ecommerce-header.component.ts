import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router, } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ecommerce-header',
  templateUrl: './ecommerce-header.component.html',
  styleUrls: ['./ecommerce-header.component.scss']
})
export class EcommerceHeaderComponent implements OnInit{



  is_showable : boolean = true
  route_subcription$ = new Subscription()

  constructor(

   private router: Router,
  ){

    this.route_subcription$ = this.router.events.subscribe((event: any) => {
      if (event instanceof RouterEvent) {
        console.log(event.url)
        if(event.url.includes('ecommerce-about')){
          this.is_showable = false
        }else if(event.url.includes('ecommerce-gallery')){
          this.is_showable = false
        }
        else{
          this.is_showable = true
        }
      }
    });
  }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.route_subcription$.unsubscribe()
  }
}
