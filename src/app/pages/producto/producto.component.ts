import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { TablaComponent } from "../../components/tabla/tabla.component";
import { Tabla2Component } from "../../components/tabla2/tabla2.component";

@Component({
  selector: 'app-producto',
  imports: [FormularioComponent, Tabla2Component],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}
