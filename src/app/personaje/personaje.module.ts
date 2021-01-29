import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeRoutingModule } from './personaje-routing.module';
import { PersonajeComponent } from './personaje.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [PersonajeComponent],
  imports: [
    CommonModule,
    PersonajeRoutingModule
  ],
  exports: [PersonajeComponent] 
})
export class PersonajeModule { }
