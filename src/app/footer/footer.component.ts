import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container content has-text-centered">
      <p>-Co byś zrobił gdyby udałoby ci się uciec<br>-Poszedłbym na piwo<br>-Nie wkurwiaj mnie</p>
    </div>
    </footer>
  `,
  styles: [
    `
    *{
      background-color: blue;
      background-size: cover;
      background-position: center center;
      color: white;

    }
    `
  ]
})
export class FooterComponent {

}
