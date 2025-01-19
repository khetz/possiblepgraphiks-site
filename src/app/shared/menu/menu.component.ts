import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuStates: Record<string, boolean> = {
    'home': true,
    'about': false,
    'services': false,
    'gallery': false,
    'contact': false
  }

  setActiveMenuItem(menuItem: string): void {
    Object.keys(this.menuStates).forEach((key) => (this.menuStates[key] = false));
    this.menuStates[menuItem] = true;
  }

}
