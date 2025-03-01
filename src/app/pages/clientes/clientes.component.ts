import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  id: any
  nombre: any
  tipo: any
  precio: any

  productos:any

  servicio = inject(FirebaseService)

  guardar(formulario: any) {
    console.log(formulario.value);
    this.servicio.postProducto(formulario.value).subscribe()    
  }

  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{
      this.productos= p
      this.productos= Object.values(this.productos)
    })
  }
}
