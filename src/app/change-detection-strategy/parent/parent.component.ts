import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public person: Person = {
    name: 'John Doe',
    age: 20
  };

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }
}
export interface Person {
  name: string;
  age: number;
}
