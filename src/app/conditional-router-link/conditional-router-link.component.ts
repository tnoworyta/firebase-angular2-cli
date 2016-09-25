import { Component, Input, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'conditional-router-link',
  templateUrl: 'conditional-router-link.component.html',
  styleUrls: ['conditional-router-link.component.css']
})
export class ConditionalRouterLinkComponent implements OnInit {
  @Input() routerLink: string;
  @Input() label: string;
  @Input() requiresLogin: boolean;

  constructor(public af: AngularFire) { }

  ngOnInit() {
    if(!this.label) {
      this.label = 'Some link'
    }
    if(this.requiresLogin == undefined) {
      this.requiresLogin = true
    }
  }

}
