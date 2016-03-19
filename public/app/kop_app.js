var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var todo_list_1 = require('./todo_list');
var todo_form_1 = require('./todo_form');
var KopApp = (function () {
    function KopApp() {
        this.title = 'KopNutri App';
        this.todos = [];
    }
    Object.defineProperty(KopApp.prototype, "remaining", {
        get: function () {
            return this.todos.reduce(function (count, todo) { return count + +!todo.done; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    KopApp.prototype.archive = function () {
        var _this = this;
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach(function (todo) {
            if (!todo.done)
                _this.todos.push(todo);
        });
    };
    KopApp.prototype.addTask = function (task) {
        this.todos.push(task);
    };
    KopApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: 'registrar.html',
            template: "\n    <h2>KopNutri App</h2>\n    <span>{{remaining}} of {{todos.length}} remaining</span>\n    [ <a (click)=\"archive()\">archive</a> ]\n    <todo-list [todos]=\"todos\"></todo-list>\n    <todo-form (newTask)=\"addTask($event)\"></todo-form>",
            styles: ['a { cursor: pointer; cursor: hand; }'],
            directives: [todo_list_1.TodoList, todo_form_1.TodoForm]
        })
    ], KopApp);
    return KopApp;
})();
exports.KopApp = KopApp;
//# sourceMappingURL=kop_app.js.map