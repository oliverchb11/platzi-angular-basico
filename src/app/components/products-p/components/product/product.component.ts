import {
  Component,
  Input,
  Output,
  EventEmitter,
 } from '@angular/core';
import { Product } from '../../../../product.interface';
import { CartService } from '../../../core/services/cart.service';
@Component({
    selector: 'app-product',
    templateUrl : './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent  {
  public contador = 0;
  @Input() product: Product;
  @Input() tituloProduct: string;
  @Output() contadorProducts: EventEmitter<number> = new EventEmitter();
  @Output() addProductClick: EventEmitter<string> = new EventEmitter();
  @Output() editProductClick: EventEmitter<string> = new EventEmitter();
  public fechaHoy: Date = new Date();
constructor(private cartService: CartService){
    console.log('constructor');
}



  public edit(): void{
    console.log('Editando item con el id');
    this.editProductClick.emit(this.product.id);
  }

  public deleteP(): void{
    console.log('hola');
  }

  public addProduct(): void{
      // this.contador += 1;
      // console.log('Añadiendo al carro', this.contador);
      // this.addProductClick.emit(this.product.title);
      // this.contadorProducts.emit(this.contador);
    this.cartService.add(this.product);
  }
}
