import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path : '',redirectTo : '/category', pathMatch : 'full'},
  // {path : 'home', component : HomeComponent},
  // {path : 'about', component : AboutComponent},
  // {
  //   path : 'category', component : CategoryComponent
  // }

  {
    path : '', pathMatch : 'full',
    loadChildren : () =>
    import('./home/home-routing.module').then(
      (m) => m.HomeRoutingModule
    ),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
