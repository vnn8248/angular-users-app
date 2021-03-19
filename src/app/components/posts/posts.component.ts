import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { };

  ngOnInit(): void {
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
    });
  };

  onNewPost(post: Post) {
    this.posts.unshift(post);
  };

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
    console.log(post);
  };

  onUpdatedPost(post: Post) {
    this.posts.forEach((curr, i) => {
      if (post.id === curr.id) {
        this.posts.splice(i, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  };

}
