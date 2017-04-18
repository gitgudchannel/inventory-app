/**
 * Created by josipledic on 17/04/2017.
 */
/**
 *  provides a `Product` object
 */
export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number
  ) {}
}
