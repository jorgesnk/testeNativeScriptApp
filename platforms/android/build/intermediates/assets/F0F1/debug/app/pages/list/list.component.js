"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listComponent = (function () {
    function listComponent() {
        this.valor = "teste";
    }
    listComponent.prototype.onTap = function () {
        alert('ola');
    };
    return listComponent;
}());
listComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: './list.html'
    })
], listComponent);
exports.listComponent = listComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQU8xQyxJQUFhLGFBQWE7SUFMMUI7UUFRUyxVQUFLLEdBQUcsT0FBTyxDQUFBO0lBT3hCLENBQUM7SUFMQyw2QkFBSyxHQUFMO1FBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUdILG9CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGFBQWE7S0FDM0IsQ0FBQztHQUNXLGFBQWEsQ0FVekI7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIGxpc3RDb21wb25lbnQge1xuXG5cbiAgcHVibGljIHZhbG9yID0gXCJ0ZXN0ZVwiXG5cbiAgb25UYXAoKSB7XG4gICAgYWxlcnQoJ29sYScpXG4gIH1cblxuXG59XG4iXX0=