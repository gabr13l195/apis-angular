import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla2',
  imports: [CommonModule],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {

  servicio = inject(ProductoService)
  productos: any
  
  ngOnInit(){
    this.servicio.getProductos().subscribe(producto=>
      this.productos=producto
    )

  }

}
