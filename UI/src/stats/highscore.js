import {inject} from 'aurelia-framework';
import {ServiceApi} from './service-api';

@inject(ServiceApi)
export class Highscore {
    constructor(svcApi) {
        this.heading = 'Highscore';
        this.serviceApi = svcApi;
        this.players = [];
    } 

    activate() {
        this.retrieveHighscore();
    }

    retrieveHighscore() {
        this.serviceApi.retrieveHighscore()
            .then(data => this.players = JSON.parse(data.response));
    }
}