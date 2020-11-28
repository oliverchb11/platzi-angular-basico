import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { PathName } from './path-name.enum';
import { EditFormComponent } from './components/edit-form/edit-form.component';
const routes: Routes = [

  {
    path:'',
    component: NavComponent,
    children:[
      {
        path: PathName.create,
        component:ProductFormComponent
      },
      {
        path: PathName.table,
        component:TableComponent
      },
      {
        path: PathName.dasboard,
        component:DasboardComponent
      },
      {
        path: PathName.proudctList,
        component:ProductListComponent
      },
     {
        path: PathName.productsCreate,
        component: FormProductComponent
     },
     {
      path: PathName.productsEdit,
      component: EditFormComponent
   },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
