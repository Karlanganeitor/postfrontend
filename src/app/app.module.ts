import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { DevolucionComponent } from './componentes/devolucion/devolucion.component';
import { GenerarOrdenComponent } from './componentes/generar-orden/generar-orden.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//external

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaProductoComponent } from './componentes/generar-orden/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './componentes/generar-orden/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/generar-orden/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './componentes/generar-orden/detalle-producto/detalle-producto.component';
@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent, 
    HomeComponent,
    BuscarComponent,
    DevolucionComponent,
    GenerarOrdenComponent,
    FilterPipe,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
