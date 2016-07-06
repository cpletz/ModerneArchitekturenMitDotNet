export class GamerRouter {


  heading = 'Do we know you?';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'gamerregister'], name: 'gamer-register', moduleId: 'gamer-register', nav: true, title: 'Register' },
      { route: 'login', name: 'login', moduleId: 'login', nav: true, title: 'Login' }
    ]);

    this.router = router;
  }
}