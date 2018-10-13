import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HelpModule} from './help/help.module';
import {CoreModule} from './core/core.module';
import {NaturalPersonModule} from './natural-person/natural-person.module';
import {LayoutModule} from './layout/layout.module';
import {JuristicPersonModule} from './juristic-person/juristic-person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule.withServerTransition({
      appId: 'rfc-facil-pwa'
    }),
    BrowserAnimationsModule,
    // app
    CoreModule,
    HelpModule,
    NaturalPersonModule,
    JuristicPersonModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
