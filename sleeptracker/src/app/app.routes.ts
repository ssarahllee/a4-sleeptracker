import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'overnight-sleep',
    loadComponent: () => import('./overnight-sleep/overnight-sleep.page').then( m => m.OvernightSleepPage)
  },
];
