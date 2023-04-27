import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_from_scratch_II';
  imgParent= "valor inicial del padre";
  img = "";
  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
