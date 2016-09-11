import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DND_DIRECTIVES } from 'ng2-dnd/ng2-dnd';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
  item: FirebaseObjectObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
  }

  ngOnInit() {
  }

  markAsDone($event){
    console.log('dropped', $event.dragData);

    //console.log(this.items.filter(it => it.$key === $event.dragData.$key));

    // console.log(z)
    // //console.log($event.dragData)
    // //this.item = $event.dragData
    // //this.items.
    //
    // //this.item.set({a: 1})
  }

}
