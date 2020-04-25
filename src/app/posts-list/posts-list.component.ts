import { Component, OnInit } from '@angular/core';
import PostFixture from '../mockedData/postFixture';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postFixture = PostFixture;

  constructor() { }

  ngOnInit() {
  }

}
