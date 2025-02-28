import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio = inject(ProductoService)

  producto: any;
  precio: any;

  guardar(formulario: any){    
    this.servicio.postProducto(formulario.value).subscribe()

    window.location.reload
  }



}
