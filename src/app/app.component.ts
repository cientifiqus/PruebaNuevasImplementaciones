import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Grid, GridOptions,ModuleRegistry } from "ag-grid-community";
import { AgGridAngular } from 'ag-grid-angular';
import { ActivatedRoute } from '@angular/router';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridAngular | undefined;


    gridOptions:GridOptions;
    rowData:any;
    columnDefs:any[];
    Query: string = "";
    
    title = 'PruebaNuevasImplementaciones';

    ngOnInit(): void { }

    ngAfterViewInit() { }

    constructor(public  _router: Router,private http: HttpClient,private route: ActivatedRoute,private router: Router,private SWapi: SwapiService) {
        localStorage.setItem('VerficacionGuard', '');
        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api!.sizeColumnsToFit();
            }
        };
        this.columnDefs = [
            { headerName: "Episodio", field: 'episode_id', sortable: true, filter: true, checkboxSelection: true },
            { headerName: "Titulo", field: 'title', sortable: true, filter: true },
            { headerName: "Director", field: 'director', sortable: true, filter: true },
            { headerName: "Descripcion", field: 'opening_crawl', sortable: true, filter: true },
            { headerName: "PersonajeURL", field: 'characters', sortable: true, filter: true }
        ];
        this.rowData = [
        ];
        this.Query ="";
    }

    async getPeliculas(){
        const films = this.SWapi.getPeliculas(this.Query).toPromise();
        const peliculas: Array<Pelicula> = (await films).results;

        this.agGrid!.api.setRowData(peliculas);
        this.agGrid!.api.checkGridSize();
    }

    getPersonajes(){
        const selectedNodes = this.agGrid!.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data )[0];
        if (typeof selectedData !== 'undefined') { 
            if (typeof selectedData.url.length !== 'undefined') { 
                this.router.navigate(['/personaje/'+encodeURIComponent(selectedData.url)]);
            }
        }
    }

    change(event: any): void  {
       this.Query = "?search="+encodeURIComponent(event.target.value);
    }
}
