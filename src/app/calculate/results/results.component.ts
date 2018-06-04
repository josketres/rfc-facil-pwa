import {Component, HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../../animations';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  animations: [slideInDownAnimation]
})
export class ResultsComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

}
