import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery-page',
  imports: [MenuComponent, CommonModule, MatIconModule],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {
  categories: string[] = [
    'Weddings',
    'Pregnancy',
    'Fashion',
    'Potraits',
    'Corporate'
  ];
  
  activeCategory: Record<string, boolean> = {
    'Weddings': true,
    'Pregnancy': false,
    'Fashion': false,
    'Potraits': false,
    'Corporate': false
  }

  weddingImages: string[] = [

  ];

  pregnancyImages: string[] = [
  ];

  fashionImages: string[] = [
    'images/model-side.jpeg',
    'images/model.jpeg'
  ];

  potraits: string[] = [
    'images/Eni.jpg',
    'images/side-look.jpeg',
    'images/Nyasha.JPG'
  ];

  corporateImages: string[] = []

  imageAssignment: Record<string, string[]> = {
    'Weddings': this.weddingImages,
    'Pregnancy': this.pregnancyImages,
    'Fashion': this.fashionImages,
    'Potraits': this.potraits,
    'Corporate': this.corporateImages
  }

  images: string[] = this.weddingImages;
  selectedImage: string | null = null;

  setActiveCategory(category: string) {
    Object.keys(this.activeCategory).forEach((key) => (this.activeCategory[key] = false));
    this.activeCategory[category] = true;
    this.images = this.imageAssignment[category];
  }

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal(event?: Event) {
    if (event) event.stopPropagation();
    this.selectedImage = null;
  }
}
