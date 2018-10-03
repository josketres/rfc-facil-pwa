import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultsComponent} from './results/results.component';
import {ResultsGuard} from './results.guard';

const routes: Routes = [{
  path: 'results',
  component: ResultsComponent,
  canActivate: [ResultsGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculateRoutingModule {
}
