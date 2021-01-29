import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { 
    path: 'peliculas', 
    loadChildren: () => import('./peliculas/peliculas.module').then(m => m.PeliculasModule),    
    canActivate: [AuthGuardService] 
  },
  { 
    path: 'personaje/:id', 
    loadChildren: () => import('./personaje/personaje.module').then(m => m.PersonajeModule) ,    
    canActivate: [AuthGuardService] 
  },
  { 
    path: 'VerficacionGuard', 
    loadChildren: () => import('./verficacion-guard/verficacion-guard.module').then(m => m.VerficacionGuardModule) 
  },
  { path: '**', loadChildren: () => import('./verficacion-guard/verficacion-guard.module').then(m => m.VerficacionGuardModule)  , canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
