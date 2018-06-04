import {Component, OnInit} from '@angular/core';
import {StateService} from '../state.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('backNavigation', [
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('invisible', style({
        transform: 'translateX(-150%)'
      })),
      transition('visible => invisible', animate('100ms ease-in')),
      transition('invisible => visible', animate('100ms ease-out'))
    ])
  ]
})
export class ToolbarComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  public backNavigationState() {
    return this.stateService.toolbarBackArrowVisible ? 'visible' : 'invisible';
  }
}
