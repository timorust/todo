import { Component } from '@angular/core';
import {TodoItem} from "./todo-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoList: TodoItem[] = [];

  constructor() {
    this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [];
  }

  saveInLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.todoList));
  }

  addNewTask(event) {
    this.todoList.push({
      title: event,
      id: Math.random().toString(36).substr(2, 9),
      done: false
    });
    this.saveInLocalStorage();
  }

  deleteAll(itemId) {
    this.todoList = this.todoList.filter((data:TodoItem) => data.id !== itemId);
    this.saveInLocalStorage();
  }
}
