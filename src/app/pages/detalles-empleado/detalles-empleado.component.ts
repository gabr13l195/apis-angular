import { Component, inject } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-detalles-empleado',
  imports: [],
  templateUrl: './detalles-empleado.component.html',
  styleUrl: './detalles-empleado.component.css'
})
export class DetallesEmpleadoComponent {

  servicio = inject(EmpleadoService)

  ngOnInit(){
    this.servicio.getUnicoEmpleado(3).subscribe(e=>{
      console.log(e);
    })
  }

}
