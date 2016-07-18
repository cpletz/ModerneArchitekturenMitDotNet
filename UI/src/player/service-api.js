import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {ServiceUrl} from './service-url';

@inject(HttpClient)
export class ServiceApi {

    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl(ServiceUrl.Url);
        });
        this.http = http;
    }

    getPlayer(playerId) {
        let request = this.http.createRequest(playerId).asGet();
        return request.send()
    }

    createPlayer(playerId, firstName, lastName) {
        let data = {
            id: playerId,
            firstName: firstName,
            lastName: lastName
        };

        let request = http.createRequest('')
            .asPost()
            .withContent(data);
        return request.send();
    }
}