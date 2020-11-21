import {
  Component,
  Input,
  Output,
  EventEmitter,
 } from '@angular/core';
import { Product } from '../../product.interface';
@Component({
    selector: 'app-product',
    templateUrl : './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent  {
  @Input() product: Product;
  @Input() tituloProduct: string;
  @Output() addProductClick: EventEmitter<string> = new EventEmitter();
  @Output() editProductClick: EventEmitter<string> = new EventEmitter();
  public fechaHoy: Date = new Date();
constructor(){
    console.log('constructor');
}



  public edit():void{
    console.log('Editando item con el id');
    this.editProductClick.emit(this.product.id);
  };

  public deleteP():void{
    console.log('hola');
  };

  public addProduct():void{
      console.log('Añadiendo al carro');
      this.addProductClick.emit(this.product.title);
  };
}
