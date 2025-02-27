import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  private API_EMPLEADO = 'https://api.sampleapis.com/futurama/characters'

//Peticiones simpere por defecto
getEmpleado(): Observable <any>{
  return this.http.get(this.API_EMPLEADO)
}

getUnicoEmpleado(id: any): Observable <any>{
  return this.http.get(`${this.API_EMPLEADO}/${id}`)

}

}
