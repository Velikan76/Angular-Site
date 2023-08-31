import { Injectable, OnInit } from '@angular/core';
import { Filtr } from './abstract-plik';

@Injectable({
  providedIn: 'root'
})
export class AbstractControlService extends Filtr implements OnInit{
ngOnInit(): void {
  this.ControlMessege('message')
}
 
}
