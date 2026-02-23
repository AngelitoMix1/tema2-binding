import { Component } from '@angular/core';
import { ContadorComponent } from './features/contador/contador.component';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}