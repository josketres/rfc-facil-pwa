import {Component} from '@angular/core';
import {Results} from './results/results.component';

@Component({
  selector: 'app-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.css']
})
export class NaturalPersonComponent {

  results: Results;

  onCalculationDone($event: Results) {
    this.results = $event;
  }

  onCalculateAgain() {
    this.results = null;
  }

}
