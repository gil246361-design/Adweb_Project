import { Routes } from '@angular/router';
import { RiderPage } from './rider/rider-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rider' },
  { path: 'rider', component: RiderPage },
  { path: 'rider/:code', component: RiderPage },
  { path: '**', redirectTo: 'rider' },
];
