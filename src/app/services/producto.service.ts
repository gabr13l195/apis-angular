import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Por explicar IA
  constructor(private http: HttpClient) {  }

  private API_PRODUCTOS="http://localhost:3000/productos"

  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_PRODUCTOS, producto)
  }
}
