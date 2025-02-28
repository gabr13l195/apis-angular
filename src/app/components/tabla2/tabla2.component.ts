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
  
  //Este metodo lee los datos
  ngOnInit(){
    this.servicio.getProductos().subscribe(producto=>
      this.productos=producto
    )
  }

  //Este metodo elimina los datos
  eliminar(id:any){
    this.servicio.deleteProducto(id).subscribe()
    window.location.reload
  }

}
