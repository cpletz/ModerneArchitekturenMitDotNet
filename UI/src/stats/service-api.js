import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {ServiceUrl} from './service-url';

@inject(HttpClient)
export class ServiceApi {

    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl(ServiceUrl.Url + 'api/Highscore/');
        });
        this.http = http;
    }

    retrieveHighscore() {
        let request = this.http.createRequest().asGet();
        return request.send()
    }
}