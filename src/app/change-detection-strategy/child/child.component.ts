import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../parent/parent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent {
  @Input() person!: Person ;
}


