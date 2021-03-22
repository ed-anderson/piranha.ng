import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

export const staticRoutes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
