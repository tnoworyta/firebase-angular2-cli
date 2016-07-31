import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.css']
})
export class ItemsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
  }

  ngOnInit() {
  }

}
