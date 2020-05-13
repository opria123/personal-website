import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Posts, POSTS } from '../entities/posts';


@Component({
  selector: 'app-markdown-render',
  templateUrl: './markdown-render.component.html',
  styleUrls: ['./markdown-render.component.scss']
})
export class MarkdownRenderComponent implements OnInit {
  blogId: any;
  location: string
  posts: Posts[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = POSTS.slice(0, 4);
    console.log(this.posts);
    this.route.params.subscribe( params => {
      this.blogId = params.id.trim();
      this.location = "/assets/blog/posts/" + this.blogId + "/" + this.blogId + ".md";
      console.log(this.blogId)
    });
  }

}
