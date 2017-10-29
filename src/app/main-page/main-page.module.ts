import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

// angular-material
import { MatButtonModule } from '@angular/material';

// primeng
import { ChartModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ChartModule
  ],
  declarations: [
    MainPageComponent,
    MainPanelComponent
  ]
})
export class MainPageModule { }