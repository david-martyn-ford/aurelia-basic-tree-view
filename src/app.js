import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'tree-list'],     name: 'tree-list',     moduleId: 'tree-list',    nav: true, title:'Tree list' },
    ]);

    this.router = router;
  }
}
