import {Redirect} from 'aurelia-router';

export class App {
  configureRouter(config, router) {
    config.title = 'TicTacTech';
    config.map([
      // { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      // { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'player',  name: 'player', moduleId: 'player/router', nav: true, title: 'Player' },
      { route: 'game',  name: 'game', moduleId: 'game/game', nav: true, title: 'Game' },
      { route: '', redirect: 'player'}
    ]);

    this.router = router;
    
  }
}
