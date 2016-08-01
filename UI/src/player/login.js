import {inject, NewInstance} from 'aurelia-framework';
import {ServiceApi} from './service-api';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(ServiceApi, NewInstance.of(ValidationController), EventAggregator)
export class Login {

  constructor(svcApi, valctrl, ea) {
    this.heading = 'Enter your player Id';
    this.playerId = '';
    this.serviceApi = svcApi;
    this.valctrl = valctrl;
    this.eventAggregator = ea;
    this.serverError = '';
  }

  submit() {
    this.serverError = '';
    this.valctrl.validate();
    if (this.errors.length === 0) {

      this.serviceApi.getPlayer(this.playerId)
        .then(
        result => {
          if (result.response === 'null') {
            this.serverError = 'Player not found.';
          }
          else {
            this.serverError = '';
            this.eventAggregator.publish('player/loggedin', JSON.parse(result.response));
          }
        },
        error => {
          this.serverError = 'Request could not be processed.';
        });
    }
  }

}

ValidationRules
  .ensure('playerId').required()
  .on(Login);
