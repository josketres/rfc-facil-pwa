import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import RfcFacil from 'rfc-facil';
import {Results} from '../results/results.component';
import {NaturalPerson, RfcService} from '../rfc.service';

@Component({
  selector: 'app-natural-person-rfc',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent {

  @Output()
  calculationDone = new EventEmitter<Results>();

  public form: FormGroup;

  constructor(fb: FormBuilder, private rfcService: RfcService) {
    const initialValues = rfcService.state.naturalPerson;
    this.form = fb.group({
      name: [initialValues.name, Validators.required],
      firstLastName: [initialValues.firstLastName, Validators.required],
      secondLastName: [initialValues.secondLastName, Validators.required],
      birthDate: [initialValues.birthDate, Validators.required],
    });
    this.form.valueChanges.subscribe((naturalPerson: NaturalPerson) => {
      this.rfcService.update({naturalPerson});
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

      this.rfcService.update({rfc});
      this.calculationDone.emit();
    } else {
      Object.values(this.form.controls)
        .forEach(c => c.markAsTouched());
    }
  }

}

