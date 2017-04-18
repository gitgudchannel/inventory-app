/**
 * Created by Josip on 18.04.2017.
 */
import {Component, HostBinding, Input} from "@angular/core";
import {Product} from "./product.model";
/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
  selector: "product-image",
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding("attr.class") cssClass = "ui small image";
}
