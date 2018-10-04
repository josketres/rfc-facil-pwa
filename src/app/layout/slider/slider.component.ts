import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {

  @ViewChild(MatTabGroup)
  tabGroup: MatTabGroup;

  slideRight() {
    this.tabGroup.selectedIndex = 1;
  }

  slideLeft() {
    this.tabGroup.selectedIndex = 0;
  }

}
