import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat/';



import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ObserversModule } from '@angular/cdk/observers';
import {MatPaginatorModule} from '@angular/material/paginator';

const firebaseConfig = {
  apiKey: "AIzaSyBidgGJC1E9T1FypXrUL_9IAp6G5h3zqpU",
  authDomain: "formularz-angular.firebaseapp.com",
  projectId: "formularz-angular",
  storageBucket: "formularz-angular.appspot.com",
  messagingSenderId: "199554337542",
  appId: "1:199554337542:web:cde01b5ae1754de759ec87"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    KontaktComponent,
    FormComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    ObserversModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
