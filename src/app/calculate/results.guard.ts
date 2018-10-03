import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {RfcService} from './rfc.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsGuard implements CanActivate {

  constructor(private rfcState: RfcService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const rfc = this.rfcState.state.rfc;
    const hasRfc = rfc && rfc.length > 0;
    if (!hasRfc) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
