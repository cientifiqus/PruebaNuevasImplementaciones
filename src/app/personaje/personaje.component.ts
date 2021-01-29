import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs';

import { SwapiService } from "src/app/swapi.service";

interface Pelicula {
  title: string;
  episode_id: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
  characters: Array<any>;
}

interface films {
  results: Array<Pelicula>;
}

interface Personaje {
  name: string;
  height: string;
  gender: number;
}

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  //public personajes!:Observable<Array<Personaje>>;
  //public peliculas:Observable< Pelicula > = Observable.of({ title:"", episode_id:"", director:"", producer:"", release_date:"", url:"", characters:[]});
  
  public personajes: any;
  public peliculas: any;

  constructor( private http: HttpClient, public  _router: Router, private route: ActivatedRoute,private SWapi: SwapiService) { 
    this.getPelicula();
  }

  async getPelicula(){
    const films = this.SWapi.getPelicula( decodeURIComponent(this.route.snapshot.paramMap.get('id')+"") ).toPromise();
    const pelicula = (await films);
    const personajes:Array<any> = [];
    $.each(pelicula.characters, async (j,personaje_url) => {
      const resultado = this.SWapi.getPelicula( personaje_url ).toPromise();
      personajes.push(  (await resultado) );
    }); 

    this.peliculas = [{ 
      title:pelicula.title, 
      episode_id:pelicula.episode_id, 
      director:pelicula.director, 
      producer:pelicula.producer, 
      release_date:pelicula.release_date, 
      url:pelicula.url, 
      characters:pelicula.characters
    }];
    this.personajes = personajes;
  }

  ngOnInit(): void {
  }

}
