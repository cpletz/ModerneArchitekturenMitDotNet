export class GamerRouter {
  heading = 'Gamer stuff';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'gamer-login'], name: 'gamer-login',       moduleId: 'gamer-login',       nav: true, title: 'Login' },
      { route: 'gamer-register',         name: 'gamer-register',         moduleId: 'gamer-register',         nav: true, title: 'Register' }
      // { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
