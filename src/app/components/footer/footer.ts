import { Component, signal } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  standalone: false,
  styleUrl: './footer.css'
})
export class Footer {
  protected readonly title = signal('Footer');
}
