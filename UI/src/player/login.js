import {inject, NewInstance} from 'aurelia-framework';
import {ServiceApi} from './service-api';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';

@inject(ServiceApi, NewInstance.of(ValidationController))
export class Login {

  @required 
  playerId = '';

  constructor(svcApi, valctrl) {
    this.heading = 'Please log in';
    // this.playerId = '';
    this.serviceApi = svcApi;
    this.valctrl = valctrl;
  }

  submit() {
    let errors = this.valctrl.validate();

    this.serviceApi.getPlayer(this.playerId)
      .then(
      result => { alert("well done!"); },
      error => { alert(error.response); }
      );
  }

}
