/**
 * Created by Josip on 18.04.2017.
 */
import {Component, HostBinding, Input} from "@angular/core";
import {Product} from "./product.model";

/**
 * @ProductRow: A component for the view of a single Product
 */
@Component({
  selector: "product-row",
  templateUrl: "./product-row.component.html"
})
export class ProductRowComponent {
  @Input() product: Product;
  @HostBinding("attr.class") cssClass = "item";
}
