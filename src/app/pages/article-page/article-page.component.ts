import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Article } from '../../models/article.model';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private destroy$ = new Subject<void>();
  private route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article!: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.getArticleById(this.articleId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getArticleById(articleId: number) {
    this.http
      .get<Article>(`${environment.apiURL}/${articleId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: Article) => {
          this.article = data;
        },
        (error: any) => console.error('Error', error)
      );
  }
}
