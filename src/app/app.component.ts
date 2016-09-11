import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ItemsComponent } from "./items/items.component";
import { LogoutComponent } from "./logout/logout.component";
import {AddItemComponent} from "./add-item/add-item.component";
import { ConditionalRouterLinkComponent } from "./conditional-router-link/conditional-router-link.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, LoginComponent, ItemsComponent, LogoutComponent, ConditionalRouterLinkComponent]
})
export class AppComponent {
  title = 'FirebaseAngular2Cli';

  constructor() { }
}
