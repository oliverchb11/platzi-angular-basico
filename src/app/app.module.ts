import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing module
import { AppRoutingModule } from './app-routing.module';
// modulo de formModule
import { FormsModule  } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
// routers
import { RouterModule } from '@angular/router';
// modulos internos de mi aplicacion
import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './components/core/core.module';
import { ProductsPModule } from './components/products-p/products-p.module';
import { ContactsModule } from './components/contacts/contacts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { environment } from 'src/environments/environment';
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/auth/auth.module';
// httpClient
import { HttpClientModule } from '@angular/common/http';
// firebase config
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule,
    ProductsPModule,
    ContactsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
