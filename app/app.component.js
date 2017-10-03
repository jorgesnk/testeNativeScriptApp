"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.valor = 0;
        this.log = false;
        this.vetor = [""];
        for (var i = 0; i < 5; i++) {
            this.vetor[i] = "teste";
        }
    }
    AppComponent.prototype.teste = function () {
        this.valor++;
        alert('entrei');
    };
    AppComponent.prototype.btn = function () {
        this.log = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-app",
        templateUrl: './app.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFRMUMsSUFBYSxZQUFZO0lBSXZCO1FBSE8sVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFFBQUcsR0FBQyxLQUFLLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFBO1FBRXpCLENBQUM7SUFFSCxDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRUQsMEJBQUcsR0FBSDtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHSCxtQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxZQUFZO0tBRTFCLENBQUM7O0dBQ1csWUFBWSxDQXFCeEI7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCdcblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgdmFsb3IgPSAwO1xuICBwdWJsaWMgbG9nPWZhbHNlO1xuICBwdWJsaWMgdmV0b3IgPSBbXCJcIl07XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICB0aGlzLnZldG9yW2ldID0gXCJ0ZXN0ZVwiXG4gIFxuICAgIH1cblxuICB9XG4gIHRlc3RlKCkge1xuICAgIHRoaXMudmFsb3IrKztcbiAgICBhbGVydCgnZW50cmVpJylcbiAgfVxuXG4gIGJ0bigpe1xuICAgIHRoaXMubG9nPXRydWU7XG4gIH1cblxuXG59Il19