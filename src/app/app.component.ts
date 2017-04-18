import {Component} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/src/resources/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99),
      new Product(
        "NICESHOES",
        "Black Running Shoes",
        "/src/resources/images/products/black-shoes.jpg",
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        "NEATJACKET",
        "Blue Jacket",
        "/src/resources/images/products/blue-jacket.jpg",
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99)
    ];
  }

  productWasSelected(product: Product) {
    console.log("Product clicked: ", product);

  }
}
