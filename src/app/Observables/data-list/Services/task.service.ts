import { EventEmitter, Injectable } from "@angular/core";
import { Subject, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
   // createTask: EventEmitter<string> = new EventEmitter<string>();
   createTask:Subject<string> = new Subject<string>();
    OnCreateTask(val: string){
        this.createTask.next(val);
    }
}