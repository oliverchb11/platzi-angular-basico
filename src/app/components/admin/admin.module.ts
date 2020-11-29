import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule  } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TableComponent } from './components/table/table.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { DirectiveDirective } from './components/directive.directive';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ProductFormComponent, NavComponent, TableComponent, DasboardComponent, ProductListComponent, FormProductComponent, DirectiveDirective, EditFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule
  ],
  exports:[
    DirectiveDirective
  ]
})
export class AdminModule { }
