import { CommonModule } from '@angular/common';
import { Component, DoCheck, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements DoCheck {
  hello ="hello"

  constructor() {
    effect(() => console.log('NEW COUNTER VALUE = ' + this.counter()));
  }
  counter = signal(0);

  message = signal<string[]>([]);
//computed signal cannot set directly its value because it depends on onther signals (counter)
  doubleCounter = computed(() => this.counter() );

  increment() {
    //this.counter.set(this.counter() + 1);
    this.counter.update((prevValue) => prevValue + 1);
    this.message.update((prevValue) => [...prevValue,'Current value of counter is: '+this.counter()]);
    //this.message.mutate((prevValue) => prevValue.push('Current value of counter is: ' + this.counter()));
 
 }
  decrement() {
    this.counter.update((prevValue) => prevValue - 1);
    // this.message.update((value)=>value.slice(0,-1));;
    }

  ngDoCheck() {
    console.log('CHANGE DETECTION CYCLE CALLED');
  }
}
