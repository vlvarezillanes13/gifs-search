import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //Buscar elemento referencia (html)
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  //injectar servicio
  constructor( private gifsService: GifsService){ }

  buscar(  ){
    const valor = this.txtBuscar.nativeElement.value;
    
    if( valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }

}
