import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogPageComponent {
  filler = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  posts = [{ name: "Hello, Blog!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Blog!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Blog!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Blog!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Blog!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 2!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 2!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 2!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 2!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 2!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 3!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler },
  { name: "Hello, Page 3!", author: "Testy McTestFace", date: "12/08/2017", body: this.filler }];
  subSetPosts = this.posts.slice(0, 5);

  pageLength = this.posts.length;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];

  pageEvent: PageEvent;

  updatePages(apageEvent: PageEvent) {
    this.pageEvent = apageEvent;
    this.subSetPosts = this.posts.slice(this.pageSize * this.pageEvent.pageIndex, this.pageSize * (this.pageEvent.pageIndex + 1))
  }
}
