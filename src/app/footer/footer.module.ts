import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

// primeng
import { ToolbarModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
