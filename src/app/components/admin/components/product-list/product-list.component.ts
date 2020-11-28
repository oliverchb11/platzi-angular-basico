import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/components/core/services/products.service';
import { Product } from 'src/app/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.fecthProducts();
  }


  public fecthProducts(): void{
  this.products =  this.productService.getAllProducts();
  console.log(this.products);
  }

  public deleteProduct(id): void {

    // tslint:disable-next-line:radix
    this.products.splice(parseInt(id) - 1, 1);
    console.log(this.products);
  }

  public editProduct(id: string): void {
    console.log(id);
    this.router.navigate(['/admin/prouducts/edit', id]);
  }
}
