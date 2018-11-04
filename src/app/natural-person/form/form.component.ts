import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import RfcFacil from 'rfc-facil';
import {Results} from '../results/results.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  calculationDone = new EventEmitter<Results>();

  form: FormGroup;

  constructor(fb: FormBuilder) {
    const initialValues = {
      name: 'Josue',
      firstLastName: 'zarzosa',
      secondLastName: 'de la torre',
      birthDate: new Date()
    } as any;
    this.form = fb.group({
      name: [initialValues.name, Validators.required],
      firstLastName: [initialValues.firstLastName, Validators.required],
      secondLastName: [initialValues.secondLastName, Validators.required],
      birthDate: [initialValues.birthDate, Validators.required],
    });
  }

  onSubmit() {
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
      this.calculationDone.emit({
        name: [person.name, person.firstLastName, person.secondLastName].join(' '),
        date: person.birthDate,
        rfc
      });
    }
  }

}
