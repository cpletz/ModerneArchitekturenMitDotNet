import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {ServiceUrl} from './service-url';

@inject(HttpClient)
export class Login {

  constructor(http) {
    this.heading = 'Please log in';
    this.playerId = '';

    http.configure(config => {
      config
        .withBaseUrl(ServiceUrl.Url);
    });

    this.http = http;
  }

  activate(params, navigationInstruction) {
    console.log(navigationInstruction);
  }

  submit() {

    let request = this.http.createRequest(this.playerId).asGet();

    request.send()
      .then(
      result => { alert(result); },
      error => { alert(error.response); }
      );
  }


}
