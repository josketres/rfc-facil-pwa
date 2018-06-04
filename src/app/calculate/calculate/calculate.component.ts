import {Component, OnInit} from '@angular/core';
import {StateService} from '../../core/state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  constructor(private stateService: StateService, private router: Router) {
  }

  ngOnInit() {
  }

  public showResults(): void {
    this.router.navigateByUrl('/results');
    this.stateService.setToolbarBackArrowVisible(true);
  }
}
