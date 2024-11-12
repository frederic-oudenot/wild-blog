import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient } from '@angular/common/http';
import { Subject, map, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private destroy$ = new Subject<void>();

  articles: Article[] = [];

  ngOnInit(): void {
    this.getArticles();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

  getArticles() {
    this.http
      .get<Article[]>(`${environment.apiURL}`)
      .pipe(
        takeUntil(this.destroy$),
        map((data: Article[]) => {
          return data.filter((article: Article) => article.isPublished)
        })
      )
      .subscribe(
        (data: Article[]) => (this.articles = data),
        (error: any) => console.error('Error', error)
    );
    console.log(this.articles)
  }
}
