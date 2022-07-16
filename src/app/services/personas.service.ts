import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //aqui llamo al api de contabilidad para que me traiga todas las boletas
_url = 'http://54.243.203.166:8080/api/contabilidad/boletas/all'

  constructor(
    private http: HttpClient
  ) { 
    console.log('Servicio persona')
  }

  //aqui creo un metodo get donde le digo que el parametro es _url
  getPersonas(){
    let heades = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this._url, {
      headers:heades
    });
  }
}
