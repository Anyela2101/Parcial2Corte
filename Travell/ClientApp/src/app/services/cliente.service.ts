import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Cliente} from '../Viaje/models/cliente';
import {HandleHttpErrorService} from '../@base/handle-http-error.service';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseurl:string,
    private handleErrorService:HandleHttpErrorService) 
    {
      this.baseUrl= baseurl;
     }

     get(): Observable<Cliente[]> {
       return this.http.get<Cliente[]>(this.baseUrl + 'api/cliente')
       .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente[]>('Consultar cliente', null))
       );
     }

     post(paciente:Cliente): Observable<Cliente>{
       return this.http.post<Cliente>(this.baseUrl + 'api/paciente', paciente)
       .pipe(
         tap(_ => this.handleErrorService.log('datos enviados')),
         catchError(this.handleErrorService.handleError<Cliente>('Registrar cliente', null))
       );
     }
}
