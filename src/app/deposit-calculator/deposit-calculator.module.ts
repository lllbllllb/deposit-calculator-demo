import { CalculationPanelComponent } from './calculation-panel/calculation-panel.component';
import { DepositCalculatorComponent } from './deposit-calculator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// primeng
import { TooltipModule } from 'primeng/primeng';

// angular material
import {
          MatButtonModule,
          MatMenuModule,
          MatSliderModule,
          MatCheckboxModule,
          MatButtonToggleModule,
          MatTableModule,
          MatInputModule,
          MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// hummer js
import 'hammerjs';

@NgModule({
          imports: [
                    BrowserAnimationsModule,
                    CommonModule,
                    MatButtonModule,
                    MatMenuModule,
                    MatSliderModule,
                    MatCheckboxModule,
                    MatButtonToggleModule,
                    MatTableModule,
                    MatInputModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatDialogModule,
                    TooltipModule
          ],
          declarations: [
                    DepositCalculatorComponent,
                    CalculationPanelComponent
          ],
          exports: [

          ]
})
export class DepositCalculatorModule { }
