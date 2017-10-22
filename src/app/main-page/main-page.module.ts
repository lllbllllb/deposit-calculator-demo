import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

// angular-material
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    MainPageComponent,
    MainPanelComponent
  ]
})
export class MainPageModule { }