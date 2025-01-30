import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
    @font-face {
      font-family: 'Segoe UI';
      src: url('/fonts/segoeuithis.ttf') format('ttf')
    }
    
    @font-face {
        font-family: 'Baskerville Old Face';
        src: url('https://khetz.github.io/possiblepgraphiks-site/fonts/baskerville-old-face.ttf') format('truetype')
    }`
  ]
})
export class AppComponent {
  title = 'possiblegraphiks-site';
}
