import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [MatToolbar, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'raizes-de-minas';

  constructor(){

  }
}
