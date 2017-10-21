import { MainPageComponent } from './main-page/main-page.component';
import { PageNotAvailableComponent } from './page-not-available/page-not-available.component';
import { DepositCalculatorComponent } from './deposit-calculator/deposit-calculator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
          { path: '', redirectTo: 'main', pathMatch: 'full' },
          { path: 'main', component: MainPageComponent },
          { path: 'calculator', component: DepositCalculatorComponent },
          { path: 'unknown', component: PageNotAvailableComponent },
          { path: '**', redirectTo: 'unknown', pathMatch: 'full' }
];

@NgModule({
          imports: [
                    RouterModule.forRoot(
                              appRoutes,
                              // { enableTracing: true } // <-- debugging purposes only
                    )
          ],
          exports: [
                    RouterModule
          ]
})
export class AppRoutingModule { }