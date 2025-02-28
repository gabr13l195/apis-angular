import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  imports: [FormsModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {
  id: any
  producto: any
  precio: any

  item: any

  servicio = inject(ProductoService)
  ruta = inject(ActivatedRoute)

  editar(formulario: any) {
    this.servicio.putProducto(formulario.value).subscribe()
  }

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.servicio.getUnicoProducto(p["idProducto"]).subscribe(producto => {
        this.item = producto
      }

      )
    })

    console.log(this.item);

    this.id = this.item.id
    this.producto = this.item.producto
    this.precio = this.item.precio
  }
}
