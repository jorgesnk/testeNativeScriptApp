"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var segmented_bar_1 = require("ui/segmented-bar");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(router, _page) {
        this.router = router;
        this._page = _page;
        this.selectedIndex = 0;
        this.visibility1 = true;
        this.visibility2 = false;
        this.visibility3 = false;
        this.login = false;
        this.items = [];
        for (var i = 1; i < 4; i++) {
            var segmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.items.push(segmentedBarItem);
        }
        this.selectedIndex = 0;
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        this._page.actionBarHidden = true;
        alert('entre');
    };
    AppComponent.prototype.onSelectedIndexChange = function (args) {
        var segmetedBar = args.object;
        this.selectedIndex = segmetedBar.selectedIndex;
        switch (this.selectedIndex) {
            case 0:
                this.visibility1 = true;
                this.visibility2 = false;
                this.visibility3 = false;
                this.router.navigateByUrl('login');
                this._page.actionBarHidden = true;
                break;
            case 1:
                this.visibility1 = false;
                this.visibility2 = true;
                this.visibility3 = false;
                this.router.navigateByUrl('list');
                this._page.actionBarHidden = false;
                break;
            case 2:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = true;
                this.router.navigateByUrl('login');
                break;
            default:
                break;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-app",
        templateUrl: './app.html'
    }),
    __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsa0RBQWtFO0FBQ2xFLDZEQUFvRjtBQUNwRixnQ0FBK0I7QUFRL0IsSUFBYSxZQUFZO0lBU3ZCLHNCQUFvQixNQUF3QixFQUFTLEtBQVc7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBUHpELGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFVBQUssR0FBRSxLQUFLLENBQUM7UUFJbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFHaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLGdCQUFnQixHQUFxQixJQUFJLGdDQUFnQixFQUFFLENBQUM7WUFDaEUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHlDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEIsQ0FBQztJQUVNLDRDQUFxQixHQUE1QixVQUE2QixJQUFJO1FBQy9CLElBQUksV0FBVyxHQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBQyxLQUFLLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDbEMsS0FBSyxDQUFDO1lBQ1I7Z0JBQ0UsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFHSCxtQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxZQUFZO0tBRTFCLENBQUM7cUNBVTRCLHVDQUFnQixFQUFnQixXQUFJO0dBVHJELFlBQVksQ0F3RHhCO0FBeERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LEFmdGVyQ29udGVudEluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMscGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBpbXBsZW1lbnRzICBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPjtcbiAgcHVibGljIHNlbGVjdGVkSW5kZXggPSAwO1xuICBwdWJsaWMgdmlzaWJpbGl0eTEgPSB0cnVlO1xuICBwdWJsaWMgdmlzaWJpbGl0eTIgPSBmYWxzZTtcbiAgcHVibGljIHZpc2liaWxpdHkzID0gZmFsc2U7XG4gIHB1YmxpYyBsb2dpbj0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIF9wYWdlOiBQYWdlKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuIFxuICBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgc2VnbWVudGVkQmFySXRlbS50aXRsZSA9IFwiVmlldyBcIiArIGk7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goc2VnbWVudGVkQmFySXRlbSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKXtcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7ICAgIFxuICAgIGFsZXJ0KCdlbnRyZScpXG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RlZEluZGV4Q2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgc2VnbWV0ZWRCYXIgPSA8U2VnbWVudGVkQmFyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHNlZ21ldGVkQmFyLnNlbGVjdGVkSW5kZXg7XG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5MSA9IHRydWU7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5MyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdsb2dpbicpXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnZpc2liaWxpdHkxID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTIgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2xpc3QnKVxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbj1mYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnbG9naW4nKVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cbn0iXX0=