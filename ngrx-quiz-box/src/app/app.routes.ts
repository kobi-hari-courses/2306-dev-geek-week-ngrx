import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'quizes', pathMatch: 'full'},
    { 
        path: 'quizes', 
        loadComponent: () => import('./features/quizes/quizes-list/quizes-list.component').then(m => m.QuizesListComponent)
    },
    {
        path: 'results', 
        loadComponent: () => import('./features/results/results-list/results-list.component').then(m => m.ResultsListComponent)
    }
];
