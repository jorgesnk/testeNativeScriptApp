"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var loginComponent = (function () {
    function loginComponent() {
        this.exibe = '';
        this.foto = '';
    }
    loginComponent.prototype.ngOnInit = function () {
        var isAvailable = camera.isAvailable();
        console.log(isAvailable);
    };
    loginComponent.prototype.take = function () {
        var _this = this;
        camera.requestPermissions();
        var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        camera.takePicture(options).
            then(function (imageAsset) {
            console.log(JSON.stringify(imageAsset));
            _this.foto = imageAsset.android;
            console.log(_this.foto);
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    return loginComponent;
}());
loginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: './login.html'
    }),
    __metadata("design:paramtypes", [])
], loginComponent);
exports.loginComponent = loginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDRDQUE4QztBQVE5QyxJQUFhLGNBQWM7SUFTekI7UUFQTyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFDLEVBQUUsQ0FBQztJQVNmLENBQUM7SUFSRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQU1ELDZCQUFJLEdBQUo7UUFBQSxpQkFXQztRQVZDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxjQUFjO0tBQzVCLENBQUM7O0dBQ1csY0FBYyxDQXlCMUI7QUF6Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBsb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGV4aWJlID0gJyc7XG4gIHB1YmxpYyBmb3RvPScnO1xuICBuZ09uSW5pdCgpIHtcbiAgICB2YXIgaXNBdmFpbGFibGUgPSBjYW1lcmEuaXNBdmFpbGFibGUoKTsgXG4gICAgY29uc29sZS5sb2coaXNBdmFpbGFibGUpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIFxuXG4gIH1cbiAgdGFrZSgpIHtcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICAgdmFyIG9wdGlvbnMgPSB7IHdpZHRoOiAzMDAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IGZhbHNlLCBzYXZlVG9HYWxsZXJ5OiB0cnVlIH07XG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpLlxuICAgICAgdGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpbWFnZUFzc2V0KSlcbiAgICAgICAgdGhpcy5mb3RvPWltYWdlQXNzZXQuYW5kcm9pZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3RvKVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbn0iXX0=