import {HttpClient} from 'aurelia-http-client';

export class GamerLogin {

  constructor() {
    this.heading = 'Please log in';
    this.identifier = 'mpletz';
    this.firstName = 'Manuel';
    this.lastName = 'Pletz';
  }

  submit() {
    const data = {
      identifier: this.identifier,
      firstName: this.firstName, 
      lastName: this.lastName
    };

    const json = JSON.stringify(data);

    const http = new HttpClient();
    let request = http.createRequest('some/cool/path')
      .asPost()
      .withContent(json);

      request.send()
        .then(
          result => {alert(result);},
          error => {alert(error.response);}
          );
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
