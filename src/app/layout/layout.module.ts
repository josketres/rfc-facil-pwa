import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class LayoutModule {
}
