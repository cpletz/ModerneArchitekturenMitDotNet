import {Redirect} from 'aurelia-router';

export class Router {
  
  heading = 'Gamer stuff';

  configureRouter(config, router) {
    config.map([
      { route: 'login', name: 'login', moduleId: 'player/login', nav: true, title: 'Login' },
      { route: 'register', name: 'register', moduleId: 'player/register', nav: true, title: 'Register' },
      { route: '', redirect: 'login' }
    ]);

    this.router = router;
  }
}
