import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Page1Component } from './Routing/page1/page1.component';
import { Page2Component } from './Routing/page2/page2.component';
import { Page3Component } from './Routing/page3/page3.component';
import { CounterComponent } from './Signals/counter/counter.component';
import { DataListComponent } from "./Observables/data-list/data-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, Page1Component, Page2Component, Page3Component, CounterComponent, RouterOutlet, RouterModule, DataListComponent]
})
export class AppComponent {
  title = 'Fundamentals';
  itemImageUrl = '../favicon.ico';

}
  