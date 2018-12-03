import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginService } from './services/login/loginservice.service';
import 'hammerjs';
import { CustomMaterialModule } from './app.material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { DialogService } from './services/dialog/dialog.service';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    MatConfirmDialogComponent,
    ProductComponent,
    AccountComponent,
    OrdersComponent,
    UserDashboardComponent,
    CheckoutComponent,
    PaymentComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent, ProductComponent]
})
export class AppModule { }
