import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { rejects } from 'assert';
import { ToastrService } from 'ngx-toastr';
import { resolve } from 'path';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, delay, filter, from, fromEvent, map, of } from 'rxjs';
import { NewTaskComponent } from "../new-task/new-task.component";
import { ShowTaskComponent } from "../show-task/show-task.component";

@Component({
  selector: 'app-data-list',
  standalone: true,
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss',
  imports: [CommonModule, NewTaskComponent, ShowTaskComponent]
})
export class DataListComponent implements AfterViewInit, OnInit {
value: any = 100;
  constructor(private _toastrService: ToastrService) { }
  async ngOnInit(): Promise<void> {
    //#region Subject
    let observable1 = new Observable((val) => {
      val.next(Math.random());
    });
    observable1.subscribe((val) => {
      console.log('from observable1', val)
    })
    observable1.subscribe((val) => {
      console.log('from observable1', val)
    })
    //Subject with 2 Subscribers
    let subject1 = new Subject<any>();
    //subscriber1
    subject1.subscribe((value) => {
      console.log('from subject', value)
    });

    //subscriber2
    subject1.subscribe((value) => {
      console.log('from subject', value)
    });
    subject1.next(Math.random());

    // Create Observable through: OF/FROM
    /*   let obs = of([1,2,3], true, new Object());
      let obs_from = from([1,2,3]);
      obs.subscribe((val)=>{
         console.log('of: ',val)
      })
      obs_from.subscribe((val)=>{
       console.log('from: ',val)
    }) 
    //#endregion
  //#region BehaviourSubject
    // BehaviourSubject: Hold initial or last emitted value for new subscriber
    /*     let bSubject = new BehaviorSubject(10);
        // subscriber1
        bSubject.subscribe((val) => {
          console.log('Subscriber 1', val)
        });
        // subscriber2
        bSubject.subscribe((val) => {
          console.log('Subscriber 2', val)
        });
        // emit new value
        bSubject.next(200);
        // new subscriber 3
        bSubject.subscribe((val) => {
          console.log('Subscriber 3', val)
        });
        bSubject.next(333); */

    //#endregion
    //#region ReplaySubject
    /*   let rSubject = new ReplaySubject(2,4000);
      rSubject.next(10);
      rSubject.next(20);
      rSubject.next(30)
      rSubject.next(40);
  
      // subscriber1
      rSubject.subscribe((val) => {
        console.log(val);
      });
      // after 2 seconds :we found (2=bufferSize) values in the ReplaySubject
      setTimeout(() => {
        console.log('Waiting for 2 seconds')  
        rSubject.subscribe((val) => {
          console.log(val);
        });
      }, 2000);
      // after 5 seconds :no value in the ReplaySubject after windowTime = 4 seconds
      setTimeout(() => {
        console.log('Waiting for 5 seconds')  
        rSubject.subscribe((val) => {
          console.log(val);
        });
      }, 5000);
       */
    //#endregion
    //#region AsyncSubject
    // The async subject sends the last emitted value to all its subscribers if the complete method is called
    /*     let asyncSubject = new AsyncSubject();
        asyncSubject.next(10);
        asyncSubject.next(20);
        asyncSubject.next(30)
        asyncSubject.next(40);
        asyncSubject.complete();
        // subscriber1
        asyncSubject.subscribe((val) => {
          console.log('subscriber1',val);
        });
    
        asyncSubject.next(40);
        asyncSubject.complete();
    
        asyncSubject.subscribe((val) => {
          console.log('subscriber2',val);
        });
     */
    //#endregion 
    //#region Promise
    /*    let promisedData = new Promise((resolve, reject) => {
         // Simulate fetching data asynchronously
         setTimeout(() => {
           const data =false;
           // Check if data was fetched successfully
           if (data) {
             // Resolve the Promise with the fetched data
             resolve(data);
           } else {
             // Reject the Promise with an error message
             reject('Failed to fetch data');
           }
         }, 1000); // Simulate a delay of 1 second
       });
       promisedData.then((data)=>{
         console.log(data);
       }); */
    //#endregion
  }
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
  /*   promisedData = new Promise((resolve, reject) => {
      resolve([1, 2, 3])
    }) */
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
