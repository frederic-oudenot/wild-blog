import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


type Article = {
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: '';
  likes: number;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input() article: Article = {
    title: "",
    author: "",
    content: "",
    image: "",
    isPublished: false,
    comment: "",
    likes: 0
  }

    togglePublication(): void {
      this.article.isPublished = !this.article.isPublished;
    }

  createComment(event:Event): void{
    event.preventDefault();
    console.log(event)
    }

  }
