export class App {
  configureRouter(config, router) {
    config.title = 'Modern Architectures';
    config.map([
      { route: ['', 'gamer-router'], name: 'gamer-router',      moduleId: 'gamer-router',      nav: true, title: 'Gamer' } ,
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' }//,
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
