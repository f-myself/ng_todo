import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  list = JSON.parse(localStorage.todoNg || '[]');

  constructor() {
    
  }

}
