import {Redirect} from 'aurelia-router';

export class Router {
  
  heading = 'Statistics';

  configureRouter(config, router) {
    config.map([
      { route: 'highscore', name: 'highscore', moduleId: 'stats/highscore', nav: true, title: 'Highscore' },
      { route: 'live', name: 'live', moduleId: 'stats/live', nav: true, title: 'Live games' },
      { route: '', redirect: 'highscore' }
    ]);

    this.router = router;
  }
}
