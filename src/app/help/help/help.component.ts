import {Component, HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../../animations';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [slideInDownAnimation]
})
export class HelpComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

}
