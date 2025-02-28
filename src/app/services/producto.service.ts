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

  //METODO GET
  getProductos():Observable<any>{
    return this.http.get(this.API_PRODUCTOS)
  }


  //METODO POST
  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_PRODUCTOS, producto)
  }
}
