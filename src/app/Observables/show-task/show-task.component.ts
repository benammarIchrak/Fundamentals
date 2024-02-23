import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../data-list/Services/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss'
})
export class ShowTaskComponent implements OnInit {

  tasks: string[] = ['task 1', 'task 2', 'task 3']
  taskService = inject(TaskService);
  ngOnInit(): void {
    this.taskService.createTask.subscribe(val=>{
      this.tasks.push(val);
      console.log(val)
    })
  }
}
