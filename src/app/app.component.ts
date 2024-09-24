import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NomDuComposantComponent } from './nom-du-composant/nom-du-composant.component';
import { ArticleComponentComponent } from './article-component/article-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NomDuComposantComponent, ArticleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Frédéric !';
}
