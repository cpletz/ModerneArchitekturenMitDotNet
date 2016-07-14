import {HttpClient} from 'aurelia-http-client';


export class Register {

  constructor() {
    this.heading = 'Tell me all about you';
    this.identifier = 'mpletz';
    this.firstName = 'Manuel';
    this.lastName = 'Pletz';
  }

  submit() {
    const data = {
      id: this.identifier,
      firstName: this.firstName, 
      lastName: this.lastName
    };

    const json = JSON.stringify(data);

    const http = new HttpClient();
    let request = http.createRequest('http://localhost:60572/api/player')
      .asPost()
      .withContent(data);

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
