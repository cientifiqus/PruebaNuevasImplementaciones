import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = (localStorage.getItem('VerficacionGuard') == 'PruebaNuevasImplementaciones'); // ... your login logic here
    if (isLoggedIn) {
      return true;
    } else {
        localStorage.setItem('VerficacionGuard','');
      this.router.navigate(['/VerficacionGuard']);
      return false;
    }
  }

}