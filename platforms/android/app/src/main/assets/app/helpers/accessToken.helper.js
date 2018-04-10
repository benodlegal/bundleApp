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
        //parse access token from url
        var accessTokenPartOne = url.split('access_token=');
        var accessTokenPartOneReverse = accessTokenPartOne.reverse();
        accessToken = accessTokenPartOneReverse.join('').split('&', 1)[0];
        console.log('your access token is ' + accessToken);
        console.log("------------------------------------");
        return accessToken;
    };
    return AccessTokenHelper;
}());
exports.AccessTokenHelper = AccessTokenHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzVG9rZW4uaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzVG9rZW4uaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtRQW9CVyx1QkFBa0IsR0FBRyxVQUFDLEdBQVc7WUFDcEMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBdEJVLGdEQUFvQixHQUEzQixVQUE0QixHQUFXO1FBQ25DLElBQUksV0FBVyxHQUFXLEVBQUUsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSx3Q0FBd0MsQ0FBQztRQUNuRCxDQUFDO1FBRUQsNkJBQTZCO1FBQzdCLElBQUksa0JBQWtCLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLHlCQUF5QixHQUFhLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZFLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFNTCx3QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuSGVscGVyIHtcblxuICAgIHB1YmxpYyB0b0FjY2Vzc1Rva2VuRnJvbVVybCh1cmw6IHN0cmluZykge1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQWNjZXNzVG9rZW5JblVybCh1cmwpKSB7XG4gICAgICAgICAgICB0aHJvdyBcImdpdmUgbWUgYSB1cmwgdGhhdCBoYXMgYW4gYWNjZXNzIHRva2VuXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vcGFyc2UgYWNjZXNzIHRva2VuIGZyb20gdXJsXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmU6IHN0cmluZ1tdID0gdXJsLnNwbGl0KCdhY2Nlc3NfdG9rZW49Jyk7XG4gICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmVSZXZlcnNlOiBzdHJpbmdbXSA9IGFjY2Vzc1Rva2VuUGFydE9uZS5yZXZlcnNlKCk7XG4gICAgICAgIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZS5qb2luKCcnKS5zcGxpdCgnJicsIDEpWzBdOyAgICAgICAgXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3lvdXIgYWNjZXNzIHRva2VuIGlzICcgKyBhY2Nlc3NUb2tlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBY2Nlc3NUb2tlbkluVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vdGVzdCBmb3IgYWNjZXNzIHRva2VuXG4gICAgICAgIHJldHVybiAodXJsLmluZGV4T2YoXCJhY2Nlc3NfdG9rZW5cIikgPiAtMSk7XG4gICAgfVxufSJdfQ==