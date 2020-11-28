import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule
  ]
})
export class ContactsModule { }
