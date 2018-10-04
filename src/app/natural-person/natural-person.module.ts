import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {NaturalPersonComponent} from './natural-person.component';
import {IntroComponent} from './intro/intro.component';
import {FormComponent} from './form/form.component';
import {ResultsComponent} from './results/results.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CoreModule,
    LayoutModule
  ],
  declarations: [
    NaturalPersonComponent,
    IntroComponent,
    FormComponent,
    ResultsComponent
  ],
  exports: [
    NaturalPersonComponent
  ]
})
export class NaturalPersonModule {
}
