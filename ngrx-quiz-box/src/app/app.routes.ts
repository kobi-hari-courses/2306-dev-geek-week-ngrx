import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'quizes', pathMatch: 'full'},
    { 
        path: 'quizes', 
        loadComponent: () => import('./features/quizes/quizes-list/quizes-list.component').then(m => m.QuizesListComponent)
    }
];
