import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './components/products-p/components/products/products.component';
import { ContactComponent } from './components/contacts/components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailComponent } from './components/products-p/components/detail/detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard  } from './components/admin.guard';
const routes: Routes = [
{
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:'',
      redirectTo:'/home',
      pathMatch:'full'
    },
    {
      path:'home',
     loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    },
    {
      path:'products',
      loadChildren: () => import('./components/products-p/products-p.module').then(m => m.ProductsPModule),
    },
    {
      path:'contact',
      loadChildren: () => import('./components/contacts/contacts.module').then(m => m.ContactsModule),
    },
    {
      path:'order',
      loadChildren: () => import('./components/order/order.module').then(m => m.OrderModule),
    },
  ]
},
{
path:'admin',
loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
// canActivate:[AdminGuard]
},

{
  path:'auth',
  loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
},

{
  path:'**', pathMatch:'full', component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
