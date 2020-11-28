import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {
      path:'',
      component:ProductsComponent
  },
  {
      path:':id',
      component: DetailComponent
  }
];


@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})


export class ProductsRoutingModule { }
