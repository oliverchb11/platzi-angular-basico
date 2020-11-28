import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cantidades$: Observable<number>;

  constructor(private cartService: CartService) {
   this.cantidades$ = this.cartService.cart$.pipe(map(products => products.length ));
   }

  ngOnInit(): void {
  }
  public cantidadProduct(cantidad: number): void{
    // const str = cantidad.toString();
    // this.cantidades = str;

    // console.log(this.cantidades);
  }

}
