import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'quizes', pathMatch: 'full'},
    { 
        path: 'quizes', children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' }, 
            { path: 'list', loadComponent: () => import('./features/quizes/quizes-list/quizes-list.component').then(m => m.QuizesListComponent) }, 
            { path: 'edit/:id', loadComponent: () => import('./features/quizes/quiz-edit/quiz-edit.component').then(m => m.QuizEditComponent) }
        ]
    },
    {
        path: 'results', 
        loadComponent: () => import('./features/results/results-list/results-list.component').then(m => m.ResultsListComponent)
    }, 
    {
        path: 'run', 
        loadComponent: () => import('./features/run/run-quiz/run-quiz.component').then(m => m.RunQuizComponent)
    }
];
