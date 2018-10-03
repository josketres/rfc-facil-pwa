import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export type RfcType = 'natural-person' | 'juristic-person';

export interface NaturalPerson {
  name: string;
  firstLastName: string;
  secondLastName: string;
  birthDate: Date | string;
}

export interface RfcState {
  type: RfcType;
  rfc?: string;
  naturalPerson?: NaturalPerson;
}

const initialState: RfcState = {
  type: 'natural-person',
  naturalPerson: {
    name: '',
    firstLastName: '',
    secondLastName: '',
    birthDate: ''
  }
};

@Injectable({
  providedIn: 'root'
})
export class RfcService {

  private readonly subject = new BehaviorSubject<RfcState>(initialState);
  public readonly state$ = this.subject.asObservable();

  update(partialState: Partial<RfcState>) {
    this.subject.next({
      ...this.state,
      ...partialState
    });
  }

  get state() {
    return this.subject.value;
  }

}
