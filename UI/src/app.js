import {Redirect} from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
import {CurrentPlayer} from './current-player';
import {BusyState} from './busy-state';

@inject(EventAggregator, CurrentPlayer, BusyState)
export class App {

  constructor(ea, cp, bs) {
    ea.subscribe('player/loggedin', data => { this.playerLoggedIn(data) });
    this.eventAggregator = ea;
    this.currentPlayer = cp;
    this.busyState = bs;
  }

  configureRouter(config, router) {
    config.title = 'TicTacTech';
    config.map([
      { route: 'player', name: 'player', moduleId: 'player/router', nav: true, title: 'Player' },
      { route: 'game', name: 'game', moduleId: 'game/game', nav: true, title: 'Game' },
      { route: '', redirect: 'player' }
    ]);

    router.playerId = '?';
    this.router = router;
  }

  playerLoggedIn(data) {
    this.router.playerId = data.id;
    this.router.navigate('game');
  }

}
