import { Component } from '@angular/core';
import { HomeComponent } from "../../sections/home/home.component";
import { AboutComponent } from "../../sections/about/about.component";
import { ServicesComponent } from '../../sections/services/services.component';
import { GalleryComponent } from '../../sections/gallery/gallery.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-main',
  imports: [HomeComponent, AboutComponent, ServicesComponent, GalleryComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth'})
    }
  }
}
