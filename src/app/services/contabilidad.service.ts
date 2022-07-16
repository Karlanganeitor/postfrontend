import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { contabilidad } from '../models/contabilidad';

@Injectable({
  providedIn: 'root'
})
export class ContabilidadService {

  contaURL = environment.contaURL;

  constructor(private httpClient: HttpClient) { }
  public updat(id: number, contabilidad: contabilidad): Observable<any> {
    return this.httpClient.put<any>(`${this.contaURL}${id}`, contabilidad);
  }
  public lista(): Observable<contabilidad[]> {
    return this.httpClient.get<contabilidad[]>(`${this.contaURL}`);
  }


  public detail(id: number): Observable<contabilidad> {
    return this.httpClient.get<contabilidad>(`${this.contaURL}${id}`);
  }
}
