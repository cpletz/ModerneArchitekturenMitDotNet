import {inject} from 'aurelia-framework';
import {ServiceApi} from './service-api';

@inject(ServiceApi)
export class Register {

  constructor(svcApi) {
    this.heading = 'Tell me all about you';
    this.playerId = 'mpletz';
    this.firstName = 'Manuel';
    this.lastName = 'Pletz';
    this.serviceApi = svcApi;
  }

  submit() {
    this.serviceApi.createPlayer(this.playerId, this.firstName, this.lastName)
      .then(
      result => { alert(result); },
      error => { alert(error.response); }
      );


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
