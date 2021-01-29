import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-verficacion-guard',
  templateUrl: './verficacion-guard.component.html',
  styleUrls: ['./verficacion-guard.component.css']
})
export class VerficacionGuardComponent implements OnInit {
  sessionStorage: string = "";
  msg: string = "No se ha autenticado!!!";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.validarToken();
  }

  change(event: any): void  {
    this.sessionStorage = event.target.value;
    localStorage.setItem('VerficacionGuard', this.sessionStorage);//PruebaNuevasImplementaciones
    this.router.navigate(['/peliculas']);
  }

  validarToken(){
    if( localStorage.getItem('VerficacionGuard') == ''){
      this.msg = "No se ha autenticado!!!";
    }
    else{      
      this.msg = "No se ha autenticado!!!";
    }
  }

}
