import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login'])
  }
}
