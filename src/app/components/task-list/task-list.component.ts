import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { MatListModule } from '@angular/material/list';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskItemComponent,
    TaskFormComponent,
    MatListModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  standalone: true
})
export class TaskListComponent {
  tasks: Task[] = [

      {
        "id": 1,
        "title": "Learn Angular",
        "description": "Study Angular fundamentals",
        "completed": false
      },
      {
        "id": 2,
        "title": "Build a Todo App",
        "description": "Create a simple Todo application using Angular",
        "completed": false
      }
    
  ];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.tasks;
    /* this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks
    ); */
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(
      () => this.loadTasks()
    );
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(
      () => this.loadTasks()
    );
  }
}
