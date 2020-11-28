import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.interface';
import { ProductsService } from '../../../core/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public tituloProducto = 'Productos de platzi';
  public power = 10;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    // this.getProductsApi();
  }

  // public getProductsApi(): void{
  //   this.productService.getProductsApi$().subscribe((products: Product[]) => {
  //   this.products = products;
  //   });
  // }

  public getProducts(): void{
  this.products = this.productService.getAllProducts();
  console.log(this.products);
  }

  public addProductDad(titulo: string): void{
    console.log('agregar producto', titulo);
  }

  public editProduct(id: string): void{
    console.log('editando', id);
  }

}
