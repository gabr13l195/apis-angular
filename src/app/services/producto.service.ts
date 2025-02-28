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

  //METODO GET - lee info
  getProductos():Observable<any>{
    return this.http.get(this.API_PRODUCTOS)
  }

  getUnicoProducto(id:any):Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
  }

  //METODO POST - guarda informacion
  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_PRODUCTOS, producto)
  }

  //METODO DELETE
  deleteProducto(id:any):Observable<any>{
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`)
  }

  //METODO PUT
  putProducto(producto:any):Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/${producto.id}`, producto)
  }

}
