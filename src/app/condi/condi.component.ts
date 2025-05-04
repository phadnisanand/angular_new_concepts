import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-condi',
  imports: [FormsModule],
  templateUrl: './condi.component.html',
  styleUrl: './condi.component.css'
})
export class CondiComponent {
    // if statement demo
    streamingService: String = "Disney+";

    fruits: string[] = ['Mango', 'Apple', 'WaterMelon'];

    toggleDemo() {
      this.streamingService = 'AppleTV';
    }

    boolval : boolean = true;
}
