import { Component, EventEmitter, Output } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() scrollToSection: EventEmitter<string> = new EventEmitter();

  images: string[] = [
    'model.jpeg',
    'Eni.jpg',
    'graduate.jpg'
  ];

  currentImageIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    AOS.init();
    this.startImageRotation();
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2000);
  }

  sendMenuClickToMainComponent(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }

  ngDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
