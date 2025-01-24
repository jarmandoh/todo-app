import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
    {
        path: 'tasks',
        loadComponent: () => import('./components/task-list/task-list.component').then(m => m.TaskListComponent)
    },
    {
       path: '',
       redirectTo : 'tasks',
       pathMatch: 'full'
    }
    /* { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: TaskListComponent } */
];


