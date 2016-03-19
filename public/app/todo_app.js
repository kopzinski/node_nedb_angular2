var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var todo_list_1 = require('./todo_list');
var todo_form_1 = require('./todo_form');
var TodoApp = (function () {
    function TodoApp() {
        this.todos = [
            { text: 'learn angular', done: true },
            { text: 'build an angular app', done: false }
        ];
    }
    Object.defineProperty(TodoApp.prototype, "remaining", {
        get: function () {
            return this.todos.reduce(function (count, todo) { return count + +!todo.done; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    TodoApp.prototype.archive = function () {
        var _this = this;
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach(function (todo) {
            if (!todo.done)
                _this.todos.push(todo);
        });
    };
    TodoApp.prototype.addTask = function (task) {
        this.todos.push(task);
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n    <h2>Todo</h2>\n    <span>{{remaining}} of {{todos.length}} remaining</span>\n    [ <a (click)=\"archive()\">archive</a> ]\n    <todo-list [todos]=\"todos\"></todo-list>\n    <todo-form (newTask)=\"addTask($event)\"></todo-form>",
            styles: ['a { cursor: pointer; cursor: hand; }'],
            directives: [todo_list_1.TodoList, todo_form_1.TodoForm]
        })
    ], TodoApp);
    return TodoApp;
})();
exports.TodoApp = TodoApp;
//# sourceMappingURL=todo_app.js.map