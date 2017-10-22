import { DepositDetailsModule } from './deposit-details/deposit-details.module';
import { FooterModule } from './footer/footer.module';
import { DepositCalculatorModule } from './deposit-calculator/deposit-calculator.module';
import { MainPageModule } from './main-page/main-page.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotAvailableComponent } from './page-not-available/page-not-available.component';
import { CarouselComponent } from './carousel/carousel.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// angular material
import {
  MatButtonModule,
  MatMenuModule,
} from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeng
import { ToolbarModule, ButtonModule } from 'primeng/primeng';

// ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotAvailableComponent,
    CarouselComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    MatButtonModule,
    MatMenuModule,
    // BrowserAnimationsModule,
    JsonpModule,
    ButtonModule,
    CoreModule,
    MainPageModule,
    DepositCalculatorModule,
    FooterModule,
    DepositDetailsModule,
    CarouselModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
