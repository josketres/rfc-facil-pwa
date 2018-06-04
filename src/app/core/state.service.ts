import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public toolbarBackArrowVisible = false;

  public setToolbarBackArrowVisible(b: boolean) {
    this.toolbarBackArrowVisible = b;
  }

}
