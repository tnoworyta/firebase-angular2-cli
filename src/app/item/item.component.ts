import { Component, Input, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('items');
  }

  ngOnInit() {
  }

  destroy(){
    this.items.remove(this.item.$key);
  }

}
