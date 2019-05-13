import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item = '';
  @Input() index = 0;

  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove2() {
    this.remove.emit(this.index);
  }

}
