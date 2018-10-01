import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-charges',
  templateUrl: './other-charges.component.html',
  styleUrls: ['./other-charges.component.css']
})
export class OtherChargesComponent implements OnInit {

  newTodo: string;
  price: number;
  todos: any;
  todoObj: any;
  frecuencies = ["Mensual", "Anual"];
  selectedFrecuency: string;

  constructor() {
    this.newTodo = '';
    this.price = 0;
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      price: this.price,
      frecuency: this.selectedFrecuency,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    this.price = 0;
    this.selectedFrecuency = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  ngOnInit() {
  }

}
