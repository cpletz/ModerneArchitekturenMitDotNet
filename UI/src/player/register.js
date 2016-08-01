import {inject, NewInstance} from 'aurelia-framework';
import {ServiceApi} from './service-api';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(ServiceApi, NewInstance.of(ValidationController), EventAggregator)
export class Register {

  constructor(svcApi, valctrl, ea) {
    this.playerId = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.heading = 'Enter your details';
    this.serviceApi = svcApi;
    this.valctrl = valctrl;
    this.eventAggregator = ea;
    this.serverError = '';
  }

  submit() {

    this.serverError = '';
    this.valctrl.validate();
    if (this.errors.length === 0) {

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
        },
        error => {
          this.serverError = 'Request could not be processed.';
        });

      // let errors = this.valctrl.validate();
      // this.serviceApi.createPlayer(this.playerId, this.firstName, this.lastName)
      //   .then(
      //   result => { alert(result); },
      //   error => { alert(error.response); }
      //   );


    }

    //   canDeactivate() {
    //     if (this.fullName !== this.previousValue) {
    //       return confirm('Are you sure you want to leave?');
    //     }
    //   }
    // }

    // export class UpperValueConverter {
    //   toView(value) {
    //     return value && value.toUpperCase();
    //   }
  }
}

ValidationRules
  .ensure('playerId').required()
  .ensure('firstName').required()
  .ensure('lastName').required()
  .ensure('email').required().email()
  .on(Register);