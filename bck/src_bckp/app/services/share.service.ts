import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  list = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth'
  ];

  constructor() { }

  add(val) {
    this.list.push(val);
  }

}
