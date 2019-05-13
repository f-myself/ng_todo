import { Component, OnInit, Input} from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  title ='Hello Angular';
  new_item = "";
  edited = '';
  constructor(private ss: ShareService) {}
  
  ngOnInit() {
  }

  add(){
    this.list.push(this.new_item);
    this.save();
    this.new_item = "";
  }

  setEdit(item){
    this.edited = item;
  }

  get count_items(){
    return this.list.length;
  }

  remove(index){
    this.list.splice(index, 1);
    //console.log(index);
    this.save();
  }

  apply(obj) {
    this.list[obj.key] = obj.value;
    this.save();
  }

  save() {
    localStorage.todoNg = JSON.stringify(this.list);
  }

  get list(){
    return this.ss.list;
  }

}
