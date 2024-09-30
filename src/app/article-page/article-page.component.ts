import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { ArticleType } from '../models/article.type';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {

  //Inject Router to redirect navigtion
  router: Router = inject(Router);
  //Inject Activate to get params id
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article!: ArticleType;
  isOneArticle:boolean = true;

  //Using injection to get articlesService
  constructor(private articlesSerice: ArticlesService) {}

  //Init when component is mounted
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      const foundArticle = this.articlesSerice.getOneArticle(this.articleId);
      foundArticle ? this.article = foundArticle : this.gotoErrorPage();
    })
  }

  //Routes went wrong : error page
  gotoErrorPage() :void {
    this.router.navigate(['error']);
  }

}
