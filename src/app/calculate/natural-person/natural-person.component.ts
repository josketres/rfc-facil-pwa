import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import RfcFacil from 'rfc-facil';

@Component({
  selector: 'app-natural-person-rfc',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent {

  public form = this.fb.group({
    name: ['', Validators.required],
    firstLastName: ['', Validators.required],
    secondLastName: ['', Validators.required],
    birthDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

  public submit() {
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
      console.log(rfc);
    } else {
      Object.values(this.form.controls)
        .forEach(c => c.markAsTouched());
    }
  }

}

