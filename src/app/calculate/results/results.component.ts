import {Component} from '@angular/core';
import {RfcService} from '../rfc.service';

export interface Results {
  name: string;
  date: string;
  rfc: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  public state$ = this.rfcService.state$;

  constructor(private rfcService: RfcService) {
  }
}
