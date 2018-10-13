import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HelpModule} from './help/help.module';
import {CoreModule} from './core/core.module';
import {HelpComponent} from './help/help/help.component';
import {NaturalPersonModule} from './natural-person/natural-person.module';
import {LayoutModule} from './layout/layout.module';
import {JuristicPersonModule} from './juristic-person/juristic-person.module';
import {SentryErrorHandler} from './core/sentry-error-handler';

const routes: Routes = [
  {path: 'help', component: HelpComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    RouterModule.forRoot(routes),
    BrowserModule,
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
