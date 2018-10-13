import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {SentryErrorHandler} from './sentry-error-handler';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

const angular = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    ...angular,
    ...material,
  ],
  providers: [{provide: ErrorHandler, useClass: SentryErrorHandler}],
  exports: [
    ...angular,
    ...material,
  ]
})
export class CoreModule {
}
