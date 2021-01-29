import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

//https://codingpotions.com/angular-servicios-llamadas-http

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

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  api_url = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient,public  _router: Router, private route: ActivatedRoute) { }

  getPeliculas(Query: string){
      const result = this.http.get<films>(this.api_url+Query);
      return result;
  }

  getPelicula(url: string){    
      const result = this.http.get<Pelicula>(url);
      return result;
  }

  getPersonaje(url: string){    
      const result = this.http.get<Personaje>(url);
      return result;
  }

}
