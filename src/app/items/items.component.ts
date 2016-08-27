import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {AddItemComponent} from "../add-item/add-item.component";
import {ItemComponent} from "../item/item.component";

@Component({
  moduleId: module.id,
  selector: 'items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.css'],
  directives: [AddItemComponent, ItemComponent]
})
export class ItemsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
  }

  ngOnInit() {
  }
}
