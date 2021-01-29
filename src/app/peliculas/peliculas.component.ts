import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit, PipeTransform  { 

  constructor( private http: HttpClient, public  _router: Router) { }

  ngOnInit(){ }

  transform(value: number, exponent?: number): number {
    return 1;
  }  

}
