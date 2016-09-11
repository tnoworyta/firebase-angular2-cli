import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DND_DIRECTIVES } from 'ng2-dnd/ng2-dnd';
import {AddItemComponent} from "../add-item/add-item.component";
import {ItemComponent} from "../item/item.component";

@Component({
  moduleId: module.id,
  selector: 'items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.css'],
  directives: [DND_DIRECTIVES, AddItemComponent, ItemComponent]
})
export class ItemsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  pendingItems: FirebaseListObservable<any[]>;
  doneItems: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
    this.pendingItems = af.database.list('items', {
      query: {
        orderByChild: 'status',
        equalTo: 'pending'
      }
    });
    this.doneItems = af.database.list('items', {
      query: {
        orderByChild: 'status',
        equalTo: 'done'
      }
    });
  }

  ngOnInit() {
  }

  markAsDone($event){
    this.items.update($event.dragData.$key, { status: 'done' });
  }

}
