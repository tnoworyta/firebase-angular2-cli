import { Component, OnInit } from '@angular/core';

import { NgForm }    from '@angular/forms';
import { User }    from './../user';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User('', '');

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.af.auth.login({ email: this.model.email, password: this.model.password });
    this.model = new User('', '');
  }

  logout() {
    this.af.auth.logout()
  }
}
