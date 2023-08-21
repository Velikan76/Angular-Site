import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    </section>
  
  
  `,
  styles: [
  ]
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

}
