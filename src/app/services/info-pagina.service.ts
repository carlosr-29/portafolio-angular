import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  team: any[] = [];

  constructor( private http: HttpClient ) {

    // console.log('Servicio de infoPagina listo');

    this.getInfo();
    this.getTeam();

  }

  private getInfo (){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
        });

  }

  private getTeam (){
    // Leer el archivo JSON
    this.http.get('https://angular-html-5b9c7.firebaseio.com/equipo.json')
        .subscribe( (resp: any[]) => {
          this.team = resp;
        });

  }
}



