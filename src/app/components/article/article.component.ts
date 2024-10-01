import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArticleType } from '../../models/article.type';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  // receive object from parent component app component
  @Input() isOneArticle!: boolean;
  @Input() article!: ArticleType;
  isPublished: boolean = true;

  //Init when component is mounted
  ngOnInit() {
    this.isPublished = this.article.isPublished === true ? true : false;
  }

  // Switch status publish for one article
  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  // Not used for this moment
  createComment(event: Event): void {
    event.preventDefault();
    console.log(event);
  }
}
