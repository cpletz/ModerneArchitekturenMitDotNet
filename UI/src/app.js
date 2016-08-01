import {Redirect} from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class App {

  constructor(ea) {
    ea.subscribe('player/loggedin', data => { this.playerLoggedIn(data) });
    this.eventAggregator = ea;
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
    this.router.playerId = data.playerId;
    this.router.navigate('game');
  }

}
