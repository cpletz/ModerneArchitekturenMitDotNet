import {inject, NewInstance} from 'aurelia-framework';
import {ServiceApi} from './service-api';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BusyState} from './../busy-state';

@inject(ServiceApi, NewInstance.of(ValidationController), EventAggregator, BusyState)
export class Register {

  constructor(svcApi, valctrl, ea, bs) {
    this.playerId = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.heading = 'Enter your details';
    this.serviceApi = svcApi;
    this.valctrl = valctrl;
    this.eventAggregator = ea;
    this.serverError = '';
    this.busyState = bs;
  }

  submit() {
    this.serverError = '';
    this.valctrl.validate();
    if (this.errors.length === 0) {
      this.busyState.increment();
      this.serviceApi.createPlayer(this.playerId, this.firstName, this.lastName, this.email)
        .then(
        result => {
          if (result.response === 'null') {
            this.serverError = 'Player with given Id already exists.';
          }
          else {
            this.serverError = '';
            this.eventAggregator.publish('player/loggedin', JSON.parse(result.response));
          }
          this.busyState.decrement();
        },
        error => {
          this.serverError = 'Request could not be processed.';
          this.busyState.decrement();
        });
    }
  }
}

ValidationRules
  .ensure('playerId').required()
  .ensure('firstName').required()
  .ensure('lastName').required()
  .ensure('email').required().email()
  .on(Register);