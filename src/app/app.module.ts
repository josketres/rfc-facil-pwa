import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HelpModule} from './help/help.module';
import {CalculateModule} from './calculate/calculate.module';
import {CoreModule} from './core/core.module';
import {CalculateComponent} from './calculate/calculate/calculate.component';
import {HelpComponent} from './help/help/help.component';
import {NaturalPersonModule} from './natural-person/natural-person.module';
import {LayoutModule} from './layout/layout.module';
import {JuristicPersonModule} from './juristic-person/juristic-person.module';

const routes: Routes = [
  {path: 'help', component: HelpComponent},
  {path: '', component: CalculateComponent}
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
    CalculateModule,
    NaturalPersonModule,
    JuristicPersonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
