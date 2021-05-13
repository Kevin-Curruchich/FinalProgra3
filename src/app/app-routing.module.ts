import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'articulo-detalle', component: ArticuloDetalleComponent
  },
  {
    path: 'agregar-articulo/:esNuevo', component: AgregarArticuloComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
