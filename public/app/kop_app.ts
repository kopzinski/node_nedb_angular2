import {Component} from 'angular2/core';
import {Refeicao} from './refeicao';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';
@Component({
  selector: 'todo-app',
  templateUrl : 'registrar.html',
  template: `
    <h2>KopNutri App</h2>
    <span>{{remaining}} of {{todos.length}} remaining</span>
    [ <a (click)="archive()">archive</a> ]
    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>`,
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [TodoList, TodoForm]
})

export class KopApp {
  title = 'KopNutri App';
  todos: Refeicao[] = [];
  refeicao : Refeicao;

  get remaining() {
    return this.todos.reduce((count: number, todo: Refeicao) => count + +!todo.done, 0);
  }
  archive(): void {
    var oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach((todo: Refeicao) => {
      if (!todo.done) this.todos.push(todo);
    });
  }
  addTask(task: Refeicao) {
    this.todos.push(task);
  }
}
