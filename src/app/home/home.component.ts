import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(public UsuarioInyectado:UsuarioService, public ArticuloInyectado:ArticulosService, private Ruta:Router) { }

  ngOnInit(): void {
    this.ArticuloInyectado.leerNoticias().subscribe((articuloDesdeApi)=>{
      this.articulos = articuloDesdeApi
    });

    let articuloEnviado: Articulo = new Articulo();
    articuloEnviado.body = "Este es el cuerpo del articulo";
    articuloEnviado.title = "Este es de prueba";
    articuloEnviado.userId = 4;

    this.ArticuloInyectado.guardarArticulo(articuloEnviado).subscribe((articuloCreado)=>{

      this.articulos.push(articuloCreado)
    })
  }

  irAlDetalle(articulo: Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('articulo-detalle');
  }

  borrar(id: number){
    this.ArticuloInyectado.borrarArticulo(id).subscribe((datos)=>{
      console.log(datos)
    })
  }

  actualizar(articulo: Articulo){

    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('agregar-articulo/false');
  }
  
}
