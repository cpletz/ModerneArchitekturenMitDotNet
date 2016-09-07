import {inject} from 'aurelia-framework';
import {ServiceApi} from './service-api';
import {BusyState} from './../busy-state';

@inject(ServiceApi, BusyState)
export class Highscore {
    constructor(svcApi, bs) {
        this.heading = 'Highscore';
        this.serviceApi = svcApi;
        this.players = [];
        this.busyState = bs;
        this.busy = false;
    } 

    setBusy() {
        this.busy = true;
        this.busyState.increment();
    }

    setNotBusy() {
        this.busy = false;
        this.busyState.decrement();
    }

    activate() {
        this.retrieveHighscore();
    }

    deactivate() {
        if(this.busy === true) this.setNotBusy();
    }

    refresh() {
        this.retrieveHighscore();
    }

    retrieveHighscore() {
        this.setBusy();
        this.serviceApi.retrieveHighscore()
            .then(data => {
                this.players = JSON.parse(data.response)
                this.setNotBusy();
            });
    }
}