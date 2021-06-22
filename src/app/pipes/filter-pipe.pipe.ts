import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], searchProduct: string): Product[] {
    searchProduct = searchProduct ? searchProduct.toLocaleLowerCase() : '';
    return searchProduct
      ? value.filter(
          (p: Product) =>
            p.productName.toLocaleLowerCase().indexOf(searchProduct) !== -1
        )
      : value;
  }
}
