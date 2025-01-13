import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit() {
    AOS.init();
  }
}
