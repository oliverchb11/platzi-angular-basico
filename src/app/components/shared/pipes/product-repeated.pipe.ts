import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.interface';
import { CartService } from '../../core/services/cart.service';

@Pipe({
  name: 'productRepeated'
})
export class ProductRepeatedPipe implements PipeTransform {
  public product$: Observable<Product[]>;
  public id: string;
  constructor(private cartService: CartService){
   this.product$ = this.cartService.cart$;

  }

  transform(value: string): string  {
      return value.split('').reverse().join('');
  }

}
