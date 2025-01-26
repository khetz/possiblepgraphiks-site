import { Component, EventEmitter, Output } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() scrollToSection: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    AOS.init();
  }

  sendMenuClickToMainComponent(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }
}
