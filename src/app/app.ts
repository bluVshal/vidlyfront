import { Component, signal } from '@angular/core';
import { NavBar } from './navBar/navBar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Vidly');
}
