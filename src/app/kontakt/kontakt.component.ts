import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kontakt',
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
  
    <form (ngSubmit)="submitForm()" #contactForm="ngForm">
      <div class="field">
        <label class="label">Dawaj Imie: </label>
        <input type="text" 
        name="name" 
        class="input" 
        [(ngModel)]="name"
        #nameInput="ngModel"
        required>

         <div class="help is-error" *ngIf="nameInput.invalid  && nameInput.dirty">
          Dawaj imie albo nici z roboty.
         </div>
        </div>

        <div class="field">
            <label class="label">E-mail</label>
            <input type="email" 
            name="email" 
            class="input" 
            [(ngModel)]="email"
            #emialInput="ngModel"
            required>

            <div class="help is-error" *ngIf="emialInput.invalid  && emialInput.touched">
              Dawaj to bo inaczej nie wyśle ukończenia roboty.
            </div>
        </div>

        <div class="field">
            <label class="label">Zlecenie</label>
            <textarea name="message" 
            class="textarea" 
            [(ngModel)]="message">
            </textarea>
        </div>

        <button type="submit" 
        class="button is-medium is-link"
        [disabled]="contactForm.invalid"
        >Zapłata</button>

    </form>
    </div>
    </section>
  
  
  `,
  styles: [
  ]
})
export class KontaktComponent implements OnInit{
  name:string;
  email:string;
  message:string;

  constructor() {}

  ngOnInit(): void {
    
  }

  submitForm() {

    const message = `Zlecenie zabicia elfa dla ${this.name}, o treści ${this.message} zostało przyjęte. Rezultat zostanie wysłany na ${this.email}.Łowca Elfów zaczyna robote. A teraz spierdalaj`;

    alert(message);

  }

}
