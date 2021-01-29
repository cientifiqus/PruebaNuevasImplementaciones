import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PeliculasComponent } from 'src/app/peliculas/peliculas.component';
import { PersonajeComponent } from 'src/app/personaje/personaje.component';
import { VerficacionGuardComponent } from 'src/app/verficacion-guard/verficacion-guard.component';
import { RouterModule } from '@angular/router';
import { SwapiService } from "src/app/swapi.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([
      PeliculasComponent,
      PersonajeComponent,
      VerficacionGuardComponent
    ]),
    ModalModule.forRoot()
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
