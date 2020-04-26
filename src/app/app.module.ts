import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import {AppMaterialModule} from './components/app-material/app-material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnimalCURDComponent } from './components/animal-curd/animal-curd.component';
import { FarmCURDComponent } from './components/farm-curd/farm-curd.component';
import { LiveStockCURDComponent } from './components/live-stock-curd/live-stock-curd.component';
import { LiveStockEventsComponent } from './components/live-stock-events/live-stock-events.component';
import { SupplyChainComponent } from './components/supply-chain/supply-chain.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { OffChainDBComponent } from './components/off-chain-db/off-chain-db.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    AnimalCURDComponent,
    FarmCURDComponent,
    LiveStockCURDComponent,
    LiveStockEventsComponent,
    SupplyChainComponent,
    OffChainDBComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    ChartsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [MatDatepickerModule,MatNativeDateModule, DatePipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
