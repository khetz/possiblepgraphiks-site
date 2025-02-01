import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'gallery', component: GalleryPageComponent },
    { path: '**', redirectTo: '' }
];
