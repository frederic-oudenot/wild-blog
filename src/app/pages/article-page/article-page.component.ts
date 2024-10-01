import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleType } from '../../models/article.type';
import { ArticleComponent } from '../../components/article/article.component';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';
import { LikeArticle } from '../../models/likeArticle.type';
import { NotificationComponent } from "../../components/notification/notification.component";

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent, CommonModule, NotificationComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent implements OnInit {
  //Inject Router to redirect navigtion
  router: Router = inject(Router);
  //Inject Activate to get params id
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article!: ArticleType;
  isOneArticle: boolean = true;

  likedArticle!: boolean;
  likedArticleName!: string;

  //Using injection to get articlesService
  constructor(private articlesService: ArticlesService) {}

  //Init when component is mounted
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));

      if (isNaN(this.articleId)) {
        this.gotoErrorPage();
      }

      const foundArticle = this.articlesService.getOneArticle(this.articleId);
      foundArticle ? (this.article = foundArticle) : this.gotoErrorPage();
    });
  }

  //Routes went wrong : error page
  gotoErrorPage(): void {
    this.router.navigate(['error']);
  }

  likeArticle(like: LikeArticle): void{
    this.likedArticle = like.isLike;
    this.likedArticleName = like.title
    setTimeout(() => {
      this.likedArticle = !like.isLike;
    }, 1000);
  }
}
