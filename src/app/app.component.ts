import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { LoginComponent } from './login/login.component'
import { ItemsComponent } from "./items/items.component";
import { LogoutComponent } from "./logout/logout.component";
import {AddItemComponent} from "./add-item/add-item.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, LoginComponent, ItemsComponent, LogoutComponent]
})
export class AppComponent {
  title = 'FirebaseAngular2Cli';

  constructor(public af: AngularFire) { }
}
