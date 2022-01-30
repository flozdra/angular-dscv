import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {PBtnComponent} from './p-btn/p-btn.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { DialogComponent } from './dialog/dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PBtnComponent,
    UsersComponent,
    OrdersComponent,
    DialogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
