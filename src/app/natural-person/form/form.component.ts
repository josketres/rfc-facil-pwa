import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import RfcFacil from 'rfc-facil';

export interface NaturalPerson {
  name: string;
  firstLastName: string;
  secondLastName: string;
  birthDate: Date | string;
}

export interface Results {
  name: string;
  date: string;
  rfc: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  calculationDone = new EventEmitter<Results>();

  public form: FormGroup;

  constructor(fb: FormBuilder) {
    const initialValues = {} as any;
    this.form = fb.group({
      name: [initialValues.name, Validators.required],
      firstLastName: [initialValues.firstLastName, Validators.required],
      secondLastName: [initialValues.secondLastName, Validators.required],
      birthDate: [initialValues.birthDate, Validators.required],
    });
  }

  public calculateRfc() {
    if (this.form.valid) {
      const person = this.form.value;
      const rfc = RfcFacil.forNaturalPerson({
        name: person.name,
        firstLastName: person.firstLastName,
        secondLastName: person.secondLastName,
        day: person.birthDate.getDay(),
        month: person.birthDate.getMonth(),
        year: person.birthDate.getYear()
      });

      this.calculationDone.emit();
    } else {
      Object.values(this.form.controls)
        .forEach(c => c.markAsTouched());
    }
  }

}
