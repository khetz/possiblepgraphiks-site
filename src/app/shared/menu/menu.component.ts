import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  @Input() isMenuOpen: boolean = false;
  @Output() scrollToSection: EventEmitter<string> = new EventEmitter();

  color: string = 'red';

  menuItems: string[] = [
    'home',
    'about',
    'services',
    'gallery',
    'contact'
  ];

  menuStates: Record<string, boolean> = {
    'home': true,
    'about': false,
    'services': false,
    'gallery': false,
    'contact': false
  }

  private router = inject(Router);

  ngOnInit(): void {
      this.router.events.subscribe(() => {
        this.color = this.router.url.includes("gallery") ? 'primary_gray-0' : 'white';
      })
  }

  setActiveMenuItem(menuItem: string): void {
    Object.keys(this.menuStates).forEach((key) => (this.menuStates[key] = false));
    this.menuStates[menuItem] = true;

    if (this.isMainPage())
      this.scrollToSection.emit(menuItem);
    else {
      this.router.navigate(['/main']).then(() => {
        const element = document.getElementById(menuItem);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
      
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  sendMenuClickToHome(sectionId: string) {
    this.toggleMenu();
    this.scrollToSection.emit(sectionId);
  }

  isMainPage() {
    return !this.router.url.includes("gallery");
  }

}
