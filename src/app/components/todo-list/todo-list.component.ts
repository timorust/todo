import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../todo-item";

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() listToDisplay: TodoItem[];
  @Output() deleteItem$ = new EventEmitter(null);

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem($event) {
    this.deleteItem$.emit($event);
  }

}
