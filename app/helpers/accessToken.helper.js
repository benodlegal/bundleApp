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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzVG9rZW4uaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzVG9rZW4uaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtRQW9CVyx1QkFBa0IsR0FBRyxVQUFDLEdBQVc7WUFDcEMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBdEJVLGdEQUFvQixHQUEzQixVQUE0QixHQUFXO1FBQ25DLElBQUksV0FBVyxHQUFXLEVBQUUsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSx3Q0FBd0MsQ0FBQztRQUNuRCxDQUFDO1FBRUQsNkJBQTZCO1FBQzdCLElBQUksa0JBQWtCLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLHlCQUF5QixHQUFhLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZFLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFNTCx3QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuSGVscGVyIHtcclxuXHJcbiAgICBwdWJsaWMgdG9BY2Nlc3NUb2tlbkZyb21VcmwodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0FjY2Vzc1Rva2VuSW5VcmwodXJsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcImdpdmUgbWUgYSB1cmwgdGhhdCBoYXMgYW4gYWNjZXNzIHRva2VuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcGFyc2UgYWNjZXNzIHRva2VuIGZyb20gdXJsXHJcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuUGFydE9uZTogc3RyaW5nW10gPSB1cmwuc3BsaXQoJ2FjY2Vzc190b2tlbj0nKTtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZTogc3RyaW5nW10gPSBhY2Nlc3NUb2tlblBhcnRPbmUucmV2ZXJzZSgpO1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZS5qb2luKCcnKS5zcGxpdCgnJicsIDEpWzBdOyAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd5b3VyIGFjY2VzcyB0b2tlbiBpcyAnICsgYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQWNjZXNzVG9rZW5JblVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vdGVzdCBmb3IgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgcmV0dXJuICh1cmwuaW5kZXhPZihcImFjY2Vzc190b2tlblwiKSA+IC0xKTtcclxuICAgIH1cclxufSJdfQ==