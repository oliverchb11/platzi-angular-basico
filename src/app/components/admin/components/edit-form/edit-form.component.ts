import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/components/core/services/products.service';
import { MyValidators } from 'src/app/components/utils/validators';
import { Product } from 'src/app/product.interface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  public formulario: FormGroup;
  public id: string;
  public product: Product;
  // tslint:disable-next-line:max-line-length
  constructor(private activeRouter: ActivatedRoute, private fb: FormBuilder,  private productService: ProductsService, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.paramsData();
  }

  private buildForm(): void{
    this.formulario = this.fb.group({
      id:['', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required]],
      image: [''],
      description: ['', Validators.required],
    });
  }


  public editProuduct(datos: FormGroup, even: Event): void{
    even.preventDefault();
    const product = datos.value;
    if (datos.valid){
      console.log(product);
    }
  }

  public paramsData(): void {
    this.activeRouter.params.subscribe((data: Params) => {
        console.log(data.id);
        const id = data.id;
        this.product = this.productService.getProduct(id);
        this.formulario.patchValue(this.product);
    });
  }

  get hasErrorRequiredPrice(): boolean{
    return this.formulario.get('price').hasError('required');
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
