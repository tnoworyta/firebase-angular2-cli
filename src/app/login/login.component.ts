import { Component, OnInit } from '@angular/core';

import { NgForm }    from '@angular/forms';
import { User }    from './../user';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User('', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.model = new User('', '');
  }
}
