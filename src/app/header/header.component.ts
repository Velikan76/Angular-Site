import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item">
        Vernon Roche Corp
        </a>
      </div>
    


      <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" routerLink="/">Siedziba</a>
        <a class="navbar-item" routerLink="/Zlecenie">Robota</a>
        <a class="navbar-item" routerLink="/Formularz">Rynek</a>
      </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
