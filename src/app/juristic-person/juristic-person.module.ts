import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JuristicPersonIntroComponent} from './juristic-person-intro/juristic-person-intro.component';
import {JuristicPersonRfcCalculatorComponent} from './juristic-person-rfc-calculator/juristic-person-rfc-calculator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JuristicPersonIntroComponent, JuristicPersonRfcCalculatorComponent],
  exports: [JuristicPersonIntroComponent, JuristicPersonRfcCalculatorComponent]
})
export class JuristicPersonModule {
}
