import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  @Input() title: string = '';

  messageLike: string = '';

  ngOnInit(): void {
      this.messageLike = `L'article ${this.title} vient d'être liké !`;
  }
}
