import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { ArticleType } from '../../models/article.type';
import { ArticlesService } from '../../services/articles.service';
import { NotificationComponent } from "../../components/notification/notification.component";
import { LikeArticle } from '../../models/likeArticle.type';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent, NotificationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  title = 'Bienvenue sur le Wild Blog de Frédéric !';

  // Data articles
  articles: ArticleType[] = [];
  isPublishedArticle: boolean = true;
  isOneArticle: boolean = false;
  like!: LikeArticle;

  likedArticle!: boolean;
  likedArticleName!: string;


  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.articlesService.getAllArticles();
    // Checking if a article is published
    this.articles.some((article: ArticleType) => article.isPublished);
  }

  likeArticle(like: LikeArticle): void{
    this.likedArticle = like.isLike;
    this.likedArticleName = like.title
    setTimeout(() => {
      this.likedArticle = !like.isLike;
    }, 1000);
  }
}
