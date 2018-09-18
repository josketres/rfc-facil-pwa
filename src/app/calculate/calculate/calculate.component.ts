import {Component, OnInit, ViewChild} from '@angular/core';
import {StateService} from '../../core/state.service';
import {Router} from '@angular/router';
import {JuristicPersonComponent} from '../juristic-person/juristic-person.component';
import {NaturalPersonComponent} from '../natural-person/natural-person.component';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  private selectedTabIndex = 0;

  @ViewChild(JuristicPersonComponent)
  private juristicPersonComponent: JuristicPersonComponent;

  @ViewChild(NaturalPersonComponent)
  private naturalPersonComponent: NaturalPersonComponent;

  constructor(private stateService: StateService, private router: Router) {
  }

  ngOnInit() {
  }

  public submit(): void {
    if (this.selectedTabIndex === 0) {
      this.naturalPersonComponent.submit();
    } else {
      this.juristicPersonComponent.submit();
    }
    // this.router.navigateByUrl('/results');
    // this.stateService.setToolbarBackArrowVisible(true);
  }

  public changeTab($event: MatTabChangeEvent): void {
    this.selectedTabIndex = $event.index;
  }

}
