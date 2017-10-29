import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotAvailableComponent } from './page-not-available.component';

// primeng
import { ToolbarModule, ButtonModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/components/sidebar/sidebar'; // https://forum.primefaces.org/viewtopic.php?t=52766

// angular material
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    SidebarModule,
    MatButtonModule
  ],
  declarations: [
    PageNotAvailableComponent
  ],
  exports: [
    PageNotAvailableComponent
  ]
})
export class PageNotAvailableModule { }
