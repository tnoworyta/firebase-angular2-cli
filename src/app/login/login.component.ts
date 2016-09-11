import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.af.auth.login({ email: this.model.email, password: this.model.password }).then(() => {
      this.model = new User('', '');
      this.router.navigate(['/items'])
    });
  }
}
