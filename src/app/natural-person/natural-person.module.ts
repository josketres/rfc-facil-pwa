import {NgModule} from '@angular/core';
import {NaturalPersonRfcCalculatorComponent} from './natural-person-rfc-calculator/natural-person-rfc-calculator.component';
import {CoreModule} from '../core/core.module';
import {NaturalPersonIntroComponent} from './natural-person-intro/natural-person-intro.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [NaturalPersonRfcCalculatorComponent, NaturalPersonIntroComponent],
  exports: [NaturalPersonRfcCalculatorComponent, NaturalPersonIntroComponent]
})
export class NaturalPersonModule {
}
