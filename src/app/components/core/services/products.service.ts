
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.interface';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Product[] = [
    {
      id: '1',
      image: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/img/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/img/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/img/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/img/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/img/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/img/camiseta.png',
      title: 'buzo negro',
      price: 90000,
      description: 'bla bla bla bla bla'
    },
  ];
  constructor() { }

 public getAllProducts(): Product[] {
    return this.products;
  }
  public getProduct(id: string): Product {
    return this.products.find(item => id === item.id);
  }

  public createProduct(product: Product): number {
    return this.products.push(product);
  }

  // public deleteProduct(id:string) {
  //   return this.products.splice(parseInt(id), 1);
  // }

  // public updateProduct(id: string, changes: Partial<Product){
  // }
  // public getProductsApi$(): Observable<Product[]>{
  //   return this.http.get<Product[]>(`${API}products`);
  // }

  // public getProductApi$(id: string): Observable<Product>{
  //   return this.http.get<Product>(`${API}products/${id}`);
  // }
}
