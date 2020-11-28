import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
 public orderProducts$: Observable<Product[]>;
 public cantidadProducts$: Observable<number>;
 public formulario: FormGroup;
 public booleanStep: boolean;
  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.orderProduct();
    this.lenghtProduct();
    this.builderForm();
  }

  ngOnInit(): void {
  }

  public builderForm(): void{
    this.formulario = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.email, Validators.required]]
    });
  }

  public orderProduct(): void{
    this.orderProducts$ = this.cartService.cart$;
  }

  public lenghtProduct(): void{
  this.cantidadProducts$ =  this.cartService.cart$.pipe(map(cantidad => cantidad.length));
  }

  public infoClient(info: FormGroup): void{
    console.log(info.value);
  }

  public SendOrder(): void{
    alert('Orden cargada correctamente');
  }

  get validRequiredName(): boolean{
    return this.formulario.get('name').hasError('required') && this.formulario.get('name').dirty;
  }

  get validRequiredEmail(): boolean{
    return this.formulario.get('email').hasError('required') && this.formulario.get('email').dirty;
  }

  get validEmail(): boolean{
    return this.formulario.get('email').hasError('email');
  }

}
