import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ProductsPModule } from '../products-p/products-p.module';
import { ReactiveFormsModule, } from '@angular/forms';
import { ProductRepeatedPipe } from './pipes/product-repeated.pipe';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    ProductRepeatedPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ProductsPModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProductRepeatedPipe
  ]
})
export class SharedModule { }
