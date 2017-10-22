import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositDetailsComponent } from './deposit-details.component';

// angular material
import {
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [DepositDetailsComponent]
})
export class DepositDetailsModule { }