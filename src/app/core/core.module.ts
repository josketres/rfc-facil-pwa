import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    // angular
    CommonModule,
    RouterModule,
    // material
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class CoreModule {
}
