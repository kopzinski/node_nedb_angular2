var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var TodoList = (function () {
    function TodoList() {
    }
    __decorate([
        core_1.Input()
    ], TodoList.prototype, "todos");
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            styles: ["\n    .done-true {\n      text-decoration: line-through;\n      color: grey;\n    }"
            ],
            template: "\n    <ul class=\"list-unstyled\">\n      <li *ngFor=\"#todo of todos\">\n        <input type=\"checkbox\" [(ngModel)]=\"todo.done\">\n        <span class=\"done-{{todo.done}}\">{{todo.text}}</span>\n      </li>\n    </ul>"
        })
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
//# sourceMappingURL=todo_list.js.map