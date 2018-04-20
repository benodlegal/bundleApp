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
        //this parses access token from url
        var accessTokenPartOne = url.split('access_token=');
        var accessTokenPartOneReverse = accessTokenPartOne.reverse();
        accessToken = accessTokenPartOneReverse.join('').split('&', 1)[0];
        return accessToken;
    };
    return AccessTokenHelper;
}());
exports.AccessTokenHelper = AccessTokenHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzVG9rZW4uaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzVG9rZW4uaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtRQWlCVyx1QkFBa0IsR0FBRyxVQUFDLEdBQVc7WUFDcEMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBbkJVLGdEQUFvQixHQUEzQixVQUE0QixHQUFXO1FBQ25DLElBQUksV0FBVyxHQUFXLEVBQUUsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSx3Q0FBd0MsQ0FBQztRQUNuRCxDQUFDO1FBRUQsbUNBQW1DO1FBQ25DLElBQUksa0JBQWtCLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLHlCQUF5QixHQUFhLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZFLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFNTCx3QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuSGVscGVyIHtcblxuICAgIHB1YmxpYyB0b0FjY2Vzc1Rva2VuRnJvbVVybCh1cmw6IHN0cmluZykge1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQWNjZXNzVG9rZW5JblVybCh1cmwpKSB7XG4gICAgICAgICAgICB0aHJvdyBcImdpdmUgbWUgYSB1cmwgdGhhdCBoYXMgYW4gYWNjZXNzIHRva2VuXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vdGhpcyBwYXJzZXMgYWNjZXNzIHRva2VuIGZyb20gdXJsXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmU6IHN0cmluZ1tdID0gdXJsLnNwbGl0KCdhY2Nlc3NfdG9rZW49Jyk7XG4gICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmVSZXZlcnNlOiBzdHJpbmdbXSA9IGFjY2Vzc1Rva2VuUGFydE9uZS5yZXZlcnNlKCk7XG4gICAgICAgIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZS5qb2luKCcnKS5zcGxpdCgnJicsIDEpWzBdOyAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0FjY2Vzc1Rva2VuSW5VcmwgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy90ZXN0IGZvciBhY2Nlc3MgdG9rZW5cbiAgICAgICAgcmV0dXJuICh1cmwuaW5kZXhPZihcImFjY2Vzc190b2tlblwiKSA+IC0xKTtcbiAgICB9XG59Il19