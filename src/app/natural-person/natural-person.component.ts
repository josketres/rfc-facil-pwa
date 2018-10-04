import {Component, ViewChild} from '@angular/core';
import {Results} from './results/results.component';
import {SliderComponent} from '../layout/slider/slider.component';

@Component({
  selector: 'app-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.css']
})
export class NaturalPersonComponent {

  results: Results;

  @ViewChild(SliderComponent)
  slider: SliderComponent;

  onCalculationDone($event: Results) {
    this.results = $event;
    this.slider.slideRight();
  }

  onCalculateAgain() {
    this.slider.slideLeft();
  }

}
