import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './contenido-tutorial/dificultades/basico/basico.component';
import { MedioComponent } from './contenido-tutorial/dificultades/medio/medio.component';
import { AdvancedComponent } from './contenido-tutorial/dificultades/advanced/advanced.component';

const routes: Routes = [ { path: 'Basic', component: BasicoComponent }, { path: 'Medium', component: MedioComponent }, { path: 'Advanced', component: AdvancedComponent }] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
