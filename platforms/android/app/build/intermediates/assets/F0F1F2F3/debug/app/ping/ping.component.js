"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ping = function () {
        this.http.get('"https://app.bundledocs.com/api/v1/users/me"')
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU07QUFDTjtJQUNFLHNCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUNoQywyQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUM7YUFDMUQsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUN4QixDQUFDO0lBQ04sQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyAuLi5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge31cbiAgcHVibGljIHBpbmcoKSB7XG4gICAgdGhpcy5odHRwLmdldCgnXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hcGkvdjEvdXNlcnMvbWVcIicpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgKTtcbiAgfVxufSJdfQ==