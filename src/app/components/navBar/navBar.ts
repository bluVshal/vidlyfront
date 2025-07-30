import { Component, signal } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navBar.html',
  standalone: false,
  styleUrl: './navBar.css'
})
export class NavBar {
  protected readonly title = signal('NavBar');
}
