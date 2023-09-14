import { Component } from '@angular/core';

@Component({
  // selector: 'app-category',
  template: `
    <h2>Welcome to Category List</h2>
    <a [routerLink]="['category-list']" routerLinkActive="active">View Company</a>
    <!-- <router-outlet></router-outlet> -->
  `,
  // styles: [
  // ]
})
export class CategoryComponent {

}
