import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})
export class ArticleComponent {
    article = {
      title: 'Titre de l\'article',
      author: 'John Doe',
      content: 'Voici le contenu de l\'article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: ''
    };

    togglePublication(): void {
      this.article.isPublished = !this.article.isPublished;
    }

  createComment(event:Event): void{
    event.preventDefault();
    console.log(event)
    }

  }
