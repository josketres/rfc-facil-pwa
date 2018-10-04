import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CoreModule} from '../core/core.module';
import {SliderComponent} from './slider/slider.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [ToolbarComponent, SliderComponent],
  exports: [ToolbarComponent, SliderComponent]
})
export class LayoutModule {
}
