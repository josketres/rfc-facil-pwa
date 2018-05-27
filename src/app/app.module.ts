import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { NaturalPersonRfcComponent } from './natural-person-rfc/natural-person-rfc.component';

@NgModule({
  declarations: [
    AppComponent,
    NaturalPersonRfcComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //
    // material
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
