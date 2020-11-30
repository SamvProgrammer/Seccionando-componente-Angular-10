import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public obj = {
    titulo:"Ventana principal",
    mensaje:"Código para ver la lista en for"
  }


  public mostrar:boolean = true;

  public arreglo:any[] = ["Spiderman","Octovus","Venom","Otros"];


  constructor() { }

  ngOnInit(): void {
  }

}
