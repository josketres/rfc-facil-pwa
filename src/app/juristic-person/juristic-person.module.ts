import {NgModule} from '@angular/core';
import {JuristicPersonComponent} from './juristic-person.component';
import {IntroComponent} from './intro/intro.component';
import {FormComponent} from './form/form.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CoreModule,
  ],
  declarations: [
    JuristicPersonComponent,
    IntroComponent,
    FormComponent
  ],
  exports: [
    JuristicPersonComponent,
  ]
})
export class JuristicPersonModule {
}
