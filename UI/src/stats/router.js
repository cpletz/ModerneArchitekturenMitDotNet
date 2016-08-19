import {Redirect} from 'aurelia-router';

export class Router {
  
  heading = 'Statistics';

  configureRouter(config, router) {
    config.map([
      { route: 'live', name: 'live', moduleId: 'stats/live', nav: true, title: 'Live games' },
      { route: '', redirect: 'live' }
    ]);

    this.router = router;
  }
}
