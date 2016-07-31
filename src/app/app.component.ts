import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ItemsComponent } from "./items/items.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, LoginComponent, ItemsComponent]
})
export class AppComponent {
  title = 'FirebaseAngular2Cli';
}
