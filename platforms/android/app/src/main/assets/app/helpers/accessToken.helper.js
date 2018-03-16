"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccessTokenHelper = (function () {
    function AccessTokenHelper() {
        this.isAccessTokenInUrl = function (url) {
            //test for access token
            return (url.indexOf("access_token") > -1);
        };
    }
    AccessTokenHelper.prototype.toAccessTokenFromUrl = function (url) {
        var accessToken = "";
        if (!this.isAccessTokenInUrl(url)) {
            throw "give me a url that has an access token";
        }
        localStorage.setItem;
        var accessTokenPartOne = url.split('access_token=');
        var accessTokenPartOneReverse = accessTokenPartOne.reverse();
        accessToken = accessTokenPartOneReverse.join('').split('&', 1)[0];
        console.log('your access token is ' + localStorage.getItem('accessToken'));
        console.log("------------------------------------");
        return accessToken;
    };
    return AccessTokenHelper;
}());
exports.AccessTokenHelper = AccessTokenHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzVG9rZW4uaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzVG9rZW4uaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtRQW1CVyx1QkFBa0IsR0FBRyxVQUFDLEdBQVc7WUFDcEMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBckJVLGdEQUFvQixHQUEzQixVQUE0QixHQUFXO1FBQ25DLElBQUksV0FBVyxHQUFXLEVBQUUsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSx3Q0FBd0MsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQTtRQUNwQixJQUFJLGtCQUFrQixHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsSUFBSSx5QkFBeUIsR0FBYSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2RSxXQUFXLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBRXBELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQU1MLHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5IZWxwZXIge1xyXG5cclxuICAgIHB1YmxpYyB0b0FjY2Vzc1Rva2VuRnJvbVVybCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWNjZXNzVG9rZW5JblVybCh1cmwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiZ2l2ZSBtZSBhIHVybCB0aGF0IGhhcyBhbiBhY2Nlc3MgdG9rZW5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW1cclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5QYXJ0T25lOiBzdHJpbmdbXSA9IHVybC5zcGxpdCgnYWNjZXNzX3Rva2VuPScpO1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmVSZXZlcnNlOiBzdHJpbmdbXSA9IGFjY2Vzc1Rva2VuUGFydE9uZS5yZXZlcnNlKCk7XHJcbiAgICAgICAgYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlblBhcnRPbmVSZXZlcnNlLmpvaW4oJycpLnNwbGl0KCcmJywgMSlbMF07ICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdXIgYWNjZXNzIHRva2VuIGlzICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNBY2Nlc3NUb2tlbkluVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy90ZXN0IGZvciBhY2Nlc3MgdG9rZW5cclxuICAgICAgICByZXR1cm4gKHVybC5pbmRleE9mKFwiYWNjZXNzX3Rva2VuXCIpID4gLTEpO1xyXG4gICAgfVxyXG59Il19