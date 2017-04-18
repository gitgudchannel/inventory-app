/**
 * Created by Josip on 18.04.2017.
 */
import {Component, Input} from "@angular/core";
/**
 * @PriceDisplay: A component to show the price of a single Product
 */
@Component({
  selector: "price-display",
  template: `
    <div class="price-display">\${{price}}</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;
}
