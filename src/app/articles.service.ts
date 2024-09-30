import { Injectable } from '@angular/core';
import { Article } from './models/articles.class';
import { ArticleType } from './models/article.type';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: ArticleType[] = [];

  constructor() {}

  getAllArticles() {
    this.articles = [
      new Article(
        1,
        'Angular 16: Les nouveautés',
        'Alice',
        "Les nouveautés d'Angular 16 incluent...",
        'https://via.placeholder.com/350x150',
        true,
        '',
        90
      ),
      new Article(
        2,
        'Développer une API REST',
        'Bob',
        'Développer une API REST nécessite...',
        'https://via.placeholder.com/350x150',
        false,
        '',
        75
      ),
      new Article(
        3,
        'Développer une API REST',
        'Bob',
        'Développer une API REST nécessite...',
        'https://via.placeholder.com/350x150',
        false,
        '',
        75
      ),
      new Article(
        4,
        'Pourquoi TypeScript est essentiel ?',
        'Charlie',
        'TypeScript apporte de la robustesse...',
        'https://via.placeholder.com/350x150',
        true,
        '',
        200
      ),
    ];
    return this.articles;
  }

  getOneArticle(articleId: number) : ArticleType | undefined {
    return this.articles.find((article: ArticleType) => Number(article.id) === Number(articleId) && article.isPublished)
  }
}
