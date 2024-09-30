import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleType } from '../models/article.type';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  title = 'Bienvenue sur le Wild Blog de Frédéric !';

  // Data articles
  articles: ArticleType[] = [];
  isPublishedArticle: boolean = true;
  isOneArticle: boolean = false;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.articlesService.getAllArticles();
    // Checking if a article is published
    this.articles.some((article: ArticleType) => article.isPublished);
  }
}
