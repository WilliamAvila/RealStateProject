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
  selectedFrecuency: string = null;
  selectedFrecuency1: string = null;
  reembolsable: boolean = false;

  selectedFrecuency2: string = null;

  selectedFrecuency3: string = null;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }
  isOn:any;

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      price: this.price,
      frecuency: this.selectedFrecuency,
      completed: false,
      reembolsable: this.reembolsable
    }
    console.log(this.todoObj);
    this.isOn = false
    this.todos.push(this.todoObj);
    this.newTodo = '';
    this.price = 0;
    this.selectedFrecuency = '';
    this.reembolsable = false;
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  ngOnInit() {
  }

}
