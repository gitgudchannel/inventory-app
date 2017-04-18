import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "./product.model";
/**
 * Created by Josip on 17.04.2017.
 */

@Component({
  selector: "products-list",
  templateUrl: "./products-list.component.html"
})
export class ProductsListComponent {
  /**
   * @input productList - the Product[] passed to us, Array of Products
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current selected Product
   * whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing the currently
   * selected Product
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  /**
   * Accepts a Product and returns true if product's sku matches the currentProduct's
   * sku. It returns false otherwise.
   * @param product
   * @returns {boolean}
   */
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
