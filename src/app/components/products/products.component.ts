import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
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
   ];
   constructor(){}
   ngOnInit(): void{
 
   }
};
