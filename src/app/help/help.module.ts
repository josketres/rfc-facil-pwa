import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelpComponent} from './help/help.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    // angular
    CommonModule,
    MatIconModule,
    // material
    MatButtonModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule {
}
