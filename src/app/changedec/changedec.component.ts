import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changedec',
  imports: [FormsModule,CommonModule],
  templateUrl: './changedec.component.html',
  styleUrl: './changedec.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangedecComponent {

   streamingService: String = "Disney+";
   // ChangeDetectorRef
   //posts :any[] = [];
   posts = signal<any[]>([]);
   http = inject(HttpClient);
   errorMessage: string = '';
   name: string = 'HTML';
   toggleDemo() {
     this.streamingService = 'AppleTV';
   }
    constructor(private cdref: ChangeDetectorRef) {

    }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(( res: any) => {
        //this.posts = res;
        this.name = 'Anand changed';
        //this.cdref.detectChanges();
        this.posts.set(res);
    })
  }
}
