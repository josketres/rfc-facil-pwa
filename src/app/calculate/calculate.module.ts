import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {CalculateRoutingModule} from './calculate-routing.module';
import {CalculateComponent} from './calculate/calculate.component';
import {JuristicPersonComponent} from './juristic-person/juristic-person.component';
import {NaturalPersonComponent} from './natural-person/natural-person.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule
} from '@angular/material';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [
    // angular
    CommonModule,
    ReactiveFormsModule,
    // material
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // app
    CalculateRoutingModule
  ],
  declarations: [
    CalculateComponent,
    JuristicPersonComponent,
    NaturalPersonComponent,
    ResultsComponent
  ],
  exports: [CalculateComponent],
  entryComponents: [CalculateComponent]
})
export class CalculateModule {
}
