import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  },

  {
    path: 'Zlecenie',
    component: KontaktComponent


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
