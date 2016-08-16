import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class CurrentPlayer {

    constructor(ea) {
        this.playerId = '?';
        ea.subscribe('player/loggedin', data => { this.playerLoggedIn(data) });
    }

    playerLoggedIn(data) {
        this.playerId = data.id;
        this.player = data;
    }
}



