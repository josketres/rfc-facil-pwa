import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {NaturalPersonComponent} from './natural-person.component';
import {IntroComponent} from './intro/intro.component';
import {FormComponent} from './form/form.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    NaturalPersonComponent,
    IntroComponent,
    FormComponent
  ],
  exports: [
    NaturalPersonComponent
  ]
})
export class NaturalPersonModule {
}
