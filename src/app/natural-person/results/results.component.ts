import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface Results {
  name: string;
  date: Date;
  rfc: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input()
  results: Results;

  @Output()
  calculateAgain = new EventEmitter<void>();

  onBackClick() {
    this.calculateAgain.emit();
  }
}
