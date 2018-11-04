import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
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
  MatCardModule,
];

const angular = [
  CommonModule,
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
