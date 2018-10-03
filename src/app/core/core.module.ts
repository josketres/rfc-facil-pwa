import {NgModule} from '@angular/core';
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
  exports: [
    ...angular,
    ...material,
  ]
})
export class CoreModule {
}
