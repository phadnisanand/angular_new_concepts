import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { catchError, Observable } from 'rxjs';
import { Post } from '../post';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-localtem',
  imports: [CommonModule],
  templateUrl: './localtem.component.html',
  styleUrl: './localtem.component.css'
})
export class LocaltemComponent {

  user = {'name': 'anand', 'age' : 30};
  posts$: Observable<Post[]>;
  errorMessage: string = '';

  products= [{
      "name": "hero Product",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "hero": "OMG This just came out today!",
      "image": "http://placehold.it/940x300/999/CCC"
    },{
      "name": "Product 1",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "info": "This is the latest and greatest product from Derp corp.",
      "image": "http://placehold.it/300x300/999/CCC"
    },{
      "name": "Product 2",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "offer": "BOGOF",
      "image": "http://placehold.it/300x300/999/CCC"
    },{
      "name": "Product 3",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "image": "http://placehold.it/300x300/999/CCC"
    },{
      "name": "Product 4",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "199",
      "offer": "No srsly GTFO",
      "image": "http://placehold.it/300x300/999/CCC"
    },{
      "name": "Product 5",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "image": "http://placehold.it/300x300/999/CCC"
    },{
      "name": "Product 6",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "info": "This is the latest and greatest product from Derp corp.",
      "offer": "info with offer",
      "image": "http://placehold.it/300x300/999/CCC"
  }];

  constructor(private apis: ApiService) {
       this.posts$ = this.apis.getAllPosts();
  }
  ngOnInit() {
    //   this.apis.getAllPosts().subscribe({
    //   next: posts => {
    //     this.posts = posts;
    //   },
    //   error: err => this.errorMessage = err
    // });

    }

}
