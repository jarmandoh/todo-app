import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo : 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        loadComponent: () => import('./components/task-list/task-list.component').then(m => m.TaskListComponent)
    },
    {
        path: 'task/:id',
        loadComponent: () => import('./components/task-detail/task-detail.component').then(m => m.TaskDetailComponent)
    }
];


