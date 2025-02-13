import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.model';
import { JsonPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-detail',
  imports: [
    MatButtonModule
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  public task!: Task;

  constructor(private taskService:TaskService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      const id = +params['id'];
      //this.taskService.getTask(id).subscribe(task => this.task = task);
      this.task = this.taskService.tasks.filter(task => task.id === id)[0];
    });
  }
  onToggle(){
    this.task.completed = !this.task.completed;
  }
  onDelete(){
    this.taskService.deleteTask(this.task.id!);
  }
  onEdit(){
    this.taskService.updateTask(this.task);
  }

}
