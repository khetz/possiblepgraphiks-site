import { Component } from '@angular/core';
import { HomeComponent } from "../../sections/home/home.component";
import { AboutComponent } from "../../sections/about/about.component";

@Component({
  selector: 'app-main',
  imports: [HomeComponent, AboutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
