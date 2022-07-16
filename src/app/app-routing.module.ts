import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {BuscarComponent} from './componentes/buscar/buscar.component';
import {DevolucionComponent} from './componentes/devolucion/devolucion.component';
import {GenerarOrdenComponent} from './componentes/generar-orden/generar-orden.component';
import { ListaProductoComponent } from './componentes/generar-orden/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './componentes/generar-orden/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './componentes/generar-orden/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/generar-orden/editar-producto/editar-producto.component';
const routes: Routes = [
  {path: 'home',component :HomeComponent},
  {path: 'buscar',component :BuscarComponent},
  {path: 'devolucion',component :DevolucionComponent},
  {path: 'orden',component :GenerarOrdenComponent},
  {path: '', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

