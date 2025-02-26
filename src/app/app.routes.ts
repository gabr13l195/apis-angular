import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesEmpleadoComponent } from './pages/detalles-empleado/detalles-empleado.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'personal', component: EmpleadosComponent},
    {path: 'personal/:idEmpleado', component: DetallesEmpleadoComponent},

    {path: '', redirectTo:'home', pathMatch:'full'},

    {path: '**', component: Error404Component},
    
];
