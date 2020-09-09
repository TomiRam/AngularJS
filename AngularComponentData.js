// ./components/example/example.component.ts
import { Component, OnInit } from '@angular/core';
import { Post, DATA } from '../../data/posts.data';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  username: string;
  totalPosts: number;
  allPosts: Post[];

  deletePost(index: number): void {
    this.allPosts.splice(index, 1);
    this.totalPosts = this.allPosts.length;
  }

  ngOnInit(): void {
    this.username = DATA.author;
    this.totalPosts = DATA.thePosts.length;
    this.allPosts = DATA.thePosts;
  }
}
<!-- ./components/example/example.component.html -->

<h1>{ username }</h1>
<span>Change Name: </span><input [(ngModel)]="username">
<h3>Posts: {{ totalPosts }}</h3>
<ul>
<hr/>
<div *ngFor="let post of allPosts; let i=index">
  <button (click)="deletePost(i)">DELETE</button>
  <h6>{{ post.title }}</h6>
  <p>{ post.body }</p>
  <hr/>
</div>
</ul>