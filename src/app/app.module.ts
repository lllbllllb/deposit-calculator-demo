import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DepositCalculatorComponent } from './deposit-calculator/deposit-calculator.component';
import { PageNotAvailableComponent } from './page-not-available/page-not-available.component';
import { CarouselComponent } from './carousel/carousel.component';

// angular material
import { MatButtonModule, MatMenuModule, MatSliderModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeng
import { ToolbarModule, ButtonModule } from 'primeng/primeng';

// ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CalculationPanelComponent } from './calculation-panel/calculation-panel.component';

// hummer js
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepositCalculatorComponent,
    PageNotAvailableComponent,
    PageNotAvailableComponent,
    CarouselComponent,
    CalculationPanelComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    ButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
