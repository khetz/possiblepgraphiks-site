import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Input() isMenuOpen: boolean = false;
  @Output() scrollToSection: EventEmitter<string> = new EventEmitter();

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
    this.scrollToSection.emit(menuItem);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  sendMenuClickToHome(sectionId: string) {
    this.toggleMenu();
    this.scrollToSection.emit(sectionId);
  }

}
