import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { AudiComponent } from './pages/audi/audi.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: 'fiat',
    component: FiatComponent,
    title:'Fiat'
  },
  {
    path: 'ford',
    component: FordComponent,
    title:'Ford'
  },
  {
    path: 'audi',
    component: AudiComponent,
    title:'Audi'
  },
  {
    path: '**',
    component: Page404Component,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
