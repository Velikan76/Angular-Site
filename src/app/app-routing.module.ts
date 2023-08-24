import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FormComponent} from './form/form.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  },

  {
    path: 'Zlecenie',
    component: KontaktComponent


  },

  {
    path: 'Formularz',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
