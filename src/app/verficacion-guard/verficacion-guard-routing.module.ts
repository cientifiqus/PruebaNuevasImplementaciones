import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerficacionGuardComponent } from './verficacion-guard.component';

const routes: Routes = [
  { 
    path: '', 
    component: VerficacionGuardComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerficacionGuardRoutingModule { }
