import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerficacionGuardRoutingModule } from './verficacion-guard-routing.module';
import { VerficacionGuardComponent } from './verficacion-guard.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [VerficacionGuardComponent],
  imports: [
    CommonModule,
    VerficacionGuardRoutingModule
  ]
})
export class VerficacionGuardModule implements OnInit { 
  constructor( private http: HttpClient) {
    
  }
  ngOnInit(){

  }
}
