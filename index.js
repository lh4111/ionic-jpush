var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name JPush
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { JPush } from 'ionic-native';
 *
 * JPush.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
export var JPush = (function () {
    function JPush() {
    }
    JPush.prototype.init = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPush.prototype.stopPush = function () {
        return;
    };
    ;
    JPush.prototype.resumePush = function () {
        return;
    };
    ;
    JPush.prototype.isPushStopped = function () {
        return;
    };
    ;
    JPush.prototype.getRegistrationID = function () {
        return;
    };
    ;
    JPush.prototype.setTagsWithAlias = function (tags, alias) {
        return;
    };
    ;
    JPush.prototype.setTags = function (tags) {
        return;
    };
    ;
    JPush.prototype.setAlias = function (alias) {
        return;
    };
    ;
    JPush.prototype.setBadge = function (badgeNum) {
        return;
    };
    ;
    JPush.prototype.getUserNotificationSettings = function () {
        return;
    };
    ;
    JPush.prototype.openNotification = function () {
        return;
    };
    ;
    JPush.prototype.receiveNotification = function () {
        return;
    };
    ;
    JPush.prototype.receiveMessage = function () {
        return;
    };
    ;
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "init", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "stopPush", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "resumePush", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "isPushStopped", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "getRegistrationID", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Array, String]),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setTagsWithAlias", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Array]),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setTags", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [String]),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setAlias", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Number]),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setBadge", null);
    __decorate([
        Cordova(),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "getUserNotificationSettings", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.openNotification',
            element: document
        }),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Observable)
    ], JPush.prototype, "openNotification", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.receiveNotification',
            element: document
        }),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Observable)
    ], JPush.prototype, "receiveNotification", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.receiveMessage',
            element: document
        }),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Observable)
    ], JPush.prototype, "receiveMessage", null);
    JPush = __decorate([
        Plugin({
            pluginName: 'JPush',
            plugin: 'jpush-phonegap-plugin',
            pluginRef: 'plugins.jPushPlugin',
            repo: 'https://github.com/jpush/jpush-phonegap-plugin',
        }),
        __metadata('design:paramtypes', [])
    ], JPush);
    return JPush;
}());
//# sourceMappingURL=index.js.map
