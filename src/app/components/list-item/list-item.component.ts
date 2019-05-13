import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item = '';
  @Output() itemChange = new EventEmitter();
  @Input() index = 0;
  @Output() remove = new EventEmitter();
  @Output() setEdit = new EventEmitter();
  @Output() apply = new EventEmitter();

  edit_item = false;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.itemChange.emit('');
  }

  remove2() {
    this.remove.emit(this.index);
  }
  
  apply2() {
    var toEdit = {
      key: this.index,
      value: this.item
    };
    //console.log(toEdit);
    this.apply.emit(toEdit);
    this.edit_item = false;
  }

  edit() {
    this.edit_item = true;
  }

  //apply(event) {
    //console.log(event);
    //this.edit_item = true;
    //this.itemChange.emit(this.item);
    //this.save.emit();
  //}

}
