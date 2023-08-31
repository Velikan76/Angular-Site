import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore/';
import { Observable, map } from 'rxjs';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AbstractControlService } from '../abstract/abstract-control.service';

@Component({
  selector: 'app-form',
  template: `
    <section class="hero is-link is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Za Temerie albo cię zajebie</h1>
    </div>
    </div>
   </section>

   <section class="section">
   <div class="container">
  
    <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)">
      <div class="field">
        <label class="label">Dawaj Imie: </label>
        <input type="text" 
        formControlName="name" 
        class="input" 
        required>

         <div class="help is-error" *ngIf="myForm.get('name').invalid && (myForm.get('name').dirty || myForm.get('name').touched)">
          Dawaj imie albo nici z roboty.
         </div>
        </div>

        <div class="field">
            <label class="label">E-mail</label>
            <input type="email" 
            formControlName="email" 
            class="input" 
            required>

            <div class="help is-error" *ngIf="myForm.get('email').invalid && (myForm.get('email').dirty || myForm.get('email').touched)">
              Dawaj to bo inaczej nie wyśle ukończenia roboty.
            </div>
        </div>

        <div class="field">
            <label class="label">Zlecenie</label>
            <textarea 
            formControlName="message" 
            class="textarea">
            </textarea>

            <div class="help is-error" *ngIf="myForm.get('message').invalid && (myForm.get('message').dirty || myForm.get('message').touched)">
              Co mam zabić.
            </div>
        </div>

        <button type="submit" 
        class="button is-medium is-link"
        [disabled]="myForm.invalid"
        >Zapłata</button>

    </form>
    </div>
    <div>
      <br>
      <h1>Moje Ostatnie zlecenia</h1>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <td title="name">Imię i Nazwisko</td>
        <td title="email">Email</td>
        <td title="message">Załączona Wiadomość</td>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let d of dane$ | async">
        <td>{{d.name}}</td>
        <td>{{d.email}}</td>
        <td>{{d.message}}</td>
      </tr>
    </tbody>
   </table>
    <mat-paginator 
              [length]="5"
              [pageSize]="1"
              [pageSizeOptions]="[1, 2, 3, 5]"
              aria-label="Select page">
    </mat-paginator>
    </div>
    </section>
  
  
  `,
  styles: []
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  isSubmit:true;
  submitMessage = '';
  dane$ : Observable<any[]>;

  private contactForm:AngularFirestoreCollection<any>;




  constructor(private fb: FormBuilder, private firestore: AngularFirestore, private Filter:AbstractControlService) {}

  ngOnInit() {
    
    this.contactForm = this.firestore.collection('Enquiry', (ref) => ref.orderBy
    ('timestamp','desc'));
    this.dane$ = this.contactForm.valueChanges({});


    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
    
  }

  
 
    onSubmit(value:any) {

      if(this.myForm.valid) {
        const formData = this.myForm.value;
        formData.timestamp = new Date();
        this.contactForm.add(formData)
        .then(() => {
          this.submitMessage = 'Wysłano';
          this.isSubmit = true;
          this.Filter.ControlMessege('Odebrano Dane');
        })
        .catch((err) => {
          console.error(err);
        })
      }
    //this.contactForm.add(value).then(res=>{
        //this.submitMessage = 'Przesłane';
      //})
      //.catch(err=>{
        //console.log(err);
      //})

      //this.isSubmit = true;
    }

    //console.log('Name', form.value.name);
    //console.log('Email', form.value.email);
    //console.log('Message', form.value.message);
  

}
