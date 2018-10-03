import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {JuristicPersonComponent} from '../juristic-person/juristic-person.component';
import {NaturalPersonComponent} from '../natural-person/natural-person.component';
import {MatTabChangeEvent} from '@angular/material';
import {RfcService} from '../rfc.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent {

  @ViewChild(JuristicPersonComponent)
  private juristicPersonComponent: JuristicPersonComponent;

  @ViewChild(NaturalPersonComponent)
  private naturalPersonComponent: NaturalPersonComponent;

  constructor(private rfcService: RfcService,
              private router: Router) {
  }

  calculateRfc(): void {
    if (this.rfcService.state.type === 'natural-person') {
      this.naturalPersonComponent.calculateRfc();
    } else {
      this.juristicPersonComponent.calculateRfc();
    }
  }

  changeTab($event: MatTabChangeEvent) {
    if ($event.index === 0) {
      this.rfcService.update({
        type: 'natural-person'
      });
    } else {
      this.rfcService.update({
        type: 'juristic-person'
      });
    }
  }

  onCalculationDone() {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/results']);
  }
}
