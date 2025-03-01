import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  private API_FIRE="https://app-angular-47f94-default-rtdb.firebaseio.com/productos.json"

  //METODO POST
  postProducto(producto:any):Observable<any>{
    return this.http.post(this.API_FIRE, producto)
  }


}
