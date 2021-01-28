import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      // todos los hijos van a heredar el layout
      {
        // añado la regla de redirect aca porque arriba no se puede
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    
    
    
      {
        path: '**', // significa que no hubo match
        component: PageNotFoundComponent, // tiene que ir ultimo siempre
      },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
