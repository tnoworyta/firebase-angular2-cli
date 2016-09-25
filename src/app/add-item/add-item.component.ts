import { Component, OnInit } from '@angular/core';
import {ItemWrapper} from "../item-wrapper";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'add-item',
  templateUrl: 'add-item.component.html',
  styleUrls: ['add-item.component.css']
})
export class AddItemComponent implements OnInit {

  items: FirebaseListObservable<any>;

  itemWrapper = new ItemWrapper('');

  constructor(public af: AngularFire) {
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  addItem($event) {
    if($event.keyCode === 13){
      this.items.push({
        desc: this.itemWrapper.desc,
        status: 'pending',
        created_at: new Date().getTime()
      });
      this.itemWrapper.desc = undefined;
    }
  }

}
