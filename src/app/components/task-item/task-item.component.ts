import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-item',
  imports: [
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<Task>();

  onDelete(): void {
    this.delete.emit(this.task.id);
  }

  onToggle(): void {
    this.toggle.emit(this.task);
  }
}
