import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_from_scratch_II';
  imgParent= "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg";
  showImg = true;
  products: Product[] = [
   {
      id: '1',
      name: 'Product 1',
      image: './../../../assets/two-wooden-toys-against-a-blue-background-with-royalty-free-image-1654524375.jpeg',
      price: 100 
    },
    {
      id: '2',
      name: 'Product 2',
      image: './../../../assets/two-wooden-toys-against-a-blue-background-with-royalty-free-image-1654524375.jpeg',
      price: 100 
    },
    {
      id: '3',
      name: 'Product 3',
      image: './../../../assets/two-wooden-toys-against-a-blue-background-with-royalty-free-image-1654524375.jpeg',
      price: 100 
    }
  ]

  onLoaded(img: string) {
    console.log('log padre', img);
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
}
