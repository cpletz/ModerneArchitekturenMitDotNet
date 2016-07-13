export class App {
  configureRouter(config, router) {
    config.title = 'TicTacTech';
    config.map([
      // { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      // { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'gamer-router',  name: 'gamer-router', moduleId: 'gamer-router', nav: true, title: 'Gamer' },
      { route: 'game',  name: 'game', moduleId: 'game', nav: true, title: 'Game' }
    ]);

    this.router = router;
    
  }
}
