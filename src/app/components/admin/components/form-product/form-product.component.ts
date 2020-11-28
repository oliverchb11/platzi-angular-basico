import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/components/core/services/products.service';
import { MyValidators } from '../../../utils/validators';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  public formulario: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(): void{
    this.formulario = this.fb.group({
      id:['', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required],
    });
  
  }

  public createProuduct(datos: FormGroup, even: Event): void{
    even.preventDefault();
    const product = datos.value;
    console.log(product);
    if (datos.valid){
      this.productService.createProduct(product);
      this.router.navigateByUrl('admin/prouducts');
    }
  }


  get hasErrorRequiredPrice(): boolean{
    return this.formulario.get('price').hasError('required');
  }

  get hasErrorPriceInvalid(): boolean {
    return this.formulario.get('price').hasError('price_invalid');
  }

  get hasErrorRequiredTitle(): boolean {
    return this.formulario.get('title').hasError('required') && this.formulario.get('title').dirty;
  }

  get hasErrorRequiredId(): boolean {
    return this.formulario.get('id').hasError('required') && this.formulario.get('id').dirty;
  }

  get hasErrorRequiredDescription(): boolean {
    return this.formulario.get('description').hasError('required') && this.formulario.get('description').dirty;
  }


}
