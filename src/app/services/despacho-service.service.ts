
import { Injectable,EventEmitter,Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DespachoServiceService {
@Output() disparadorDeFav: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
