import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./layout/home-page/home-page.component').then(c => c.HomePageComponent) },
    {
        path: 'java',
        loadComponent: () => import('./layout/java/java.component').then(c => c.JavaComponent),
        children: [
            { path: 'java/:id', loadChildren: () => import('./layout/category-detail/category-detail.component').then(c => c.CategoryDetailComponent) }
        ]
    },
    { path: '**', loadComponent: () => import('./layout/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) }
];
