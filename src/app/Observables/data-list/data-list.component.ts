import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject, viewChild } from '@angular/core';
import { rejects } from 'assert';
import { ToastrService } from 'ngx-toastr';
import { resolve } from 'path';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';
import { NewTaskComponent } from "../new-task/new-task.component";
import { ShowTaskComponent } from "../show-task/show-task.component";

@Component({
    selector: 'app-data-list',
    standalone: true,
    templateUrl: './data-list.component.html',
    styleUrl: './data-list.component.scss',
    imports: [CommonModule, NewTaskComponent, ShowTaskComponent]
})
export class DataListComponent implements AfterViewInit {

  constructor(private _toastrService: ToastrService) { }
  ngAfterViewInit(): void {
  }

  @ViewChild('createbtn')
  createBtn: ElementRef;
  createBtnObservable;
  data: any[] = [];
  array1 = [1, 2, 3, 4, 5, 6];
  array2 = ['A', 'B', 'C', 'D']
  //Observable
  /*   myObservable = new Observable((observer) => {
      setTimeout(() => { observer.next(1) }, 2000)
      setTimeout(() => { observer.next(2) }, 4000)
      setTimeout(() => { observer.next(3) }, 6000)
      setTimeout(() => { observer.error(new Error('Something went wrong')) }, 8000)
      setTimeout(() => { observer.complete() }, 8000)
    }) */
  //myObservable = of(this.array1, this.array2, true, 'hello');
  promisedData = new Promise((resolve, reject) => {
    resolve([1, 2, 3])
  })
  myObservable = from([1, 2, 3, 4, 5]).pipe(
    map((val) => {
      return val * 11
    }),
    filter((val) => {
      return val % 2 === 0
    })
  );
  // trasforming emitted Data using map
  transformedMyObservable = this.myObservable.pipe(map((val) => {
    return val * 11
  }))
  // filtering emitted Data using filter
  filtredMyObservable = this.transformedMyObservable.pipe(filter((val) => {
    return val % 5 === 0
  })
  )

  GetAsyncData() {
    //Observer  
    this.myObservable.subscribe(
      (val: any) => {
        this.data.push(val);
        console.log(val)
      },

      (err) => {
        this._toastrService.error(err.message)
      },
      () => {
        this._toastrService.show('All data is streamed!')
      }
    )
  }
  //creating an observable from the click event
  /*   AddItem(){
      //convert click event to observable
     this.createBtnObservable =  fromEvent(this.createBtn.nativeElement, 'click')
     .subscribe((data)=> {
      this.showItem()
     });
    }
    showItem(){
      let div =document.createElement('div');
      div.innerText = 'item';
      div.className ="data-list"
      document.getElementById("container").appendChild(div);
    } */

}
