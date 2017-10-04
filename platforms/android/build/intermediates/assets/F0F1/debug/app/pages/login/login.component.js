"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var loginComponent = (function () {
    function loginComponent() {
        this.exibe = '';
    }
    loginComponent.prototype.ngOnInit = function () {
        var isAvailable = camera.isAvailable();
        console.log(isAvailable);
    };
    loginComponent.prototype.take = function () {
        var options = { width: 300, height: 300, keepAspectRatio: true, saveToGallery: true };
        camera.takePicture(options).
            then(function (imageAsset) {
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
            console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDRDQUE4QztBQVE5QyxJQUFhLGNBQWM7SUFRekI7UUFOTyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBU2xCLENBQUM7SUFSRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQU1ELDZCQUFJLEdBQUo7UUFDRSxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN0RixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGNBQWM7S0FDNUIsQ0FBQzs7R0FDVyxjQUFjLENBdUIxQjtBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIGxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZXhpYmUgPSAnJztcbiAgbmdPbkluaXQoKSB7XG4gICAgdmFyIGlzQXZhaWxhYmxlID0gY2FtZXJhLmlzQXZhaWxhYmxlKCk7IFxuICAgIGNvbnNvbGUubG9nKGlzQXZhaWxhYmxlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBcblxuICB9XG4gIHRha2UoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7IHdpZHRoOiAzMDAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRydWUgfTtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykuXG4gICAgICB0aGVuKChpbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZTogXCIgKyBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGggKyBcInhcIiArIGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImtlZXBBc3BlY3RSYXRpbzogXCIgKyBpbWFnZUFzc2V0Lm9wdGlvbnMua2VlcEFzcGVjdFJhdGlvKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQaG90byBzYXZlZCBpbiBQaG90b3MvR2FsbGVyeSBmb3IgQW5kcm9pZCBvciBpbiBDYW1lcmEgUm9sbCBmb3IgaU9TXCIpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbn0iXX0=