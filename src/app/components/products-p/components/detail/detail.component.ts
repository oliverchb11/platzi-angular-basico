import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product.interface';
import { ProductsService } from '../../../core/services/products.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private productService: ProductsService) { }
  public product: Product;
  ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void{
    this.activeRouter.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);
      console.log(this.product);
    });
  }

  public createProduct(): void{
    const newProduct: Product = {
      id: '8',
      image: 'assets/img/stickers2.png',
      title: 'Sticker Super Cool',
      price: 90000,
      description: 'Esto es un super sticker'
    };
    this.productService.createProduct(newProduct);
  }

}
