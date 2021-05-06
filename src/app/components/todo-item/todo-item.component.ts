import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../todo-item";

@Component({
  selector: 'tl-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() itemToDisplay: TodoItem;
  @Output() deleteThisItem$ = new EventEmitter(null);

  deleteItem(itemId) {
    this.deleteThisItem$.emit(itemId)
  }

  toggleDone() {
    this.itemToDisplay.done = !this.itemToDisplay.done;
  }

}
