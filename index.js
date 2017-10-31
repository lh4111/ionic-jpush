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
 * import { JPush } from 'ionic3-jpush';
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
    /**
     * 调用此 API，用来开启 JPush SDK 提供的推送服务。
     * 开发者 App 可以通过调用停止推送服务 API 来停止极光推送服务。当又需要使用极光推送服务时，则必须要调用恢复推送服务 API。
     * 本功能是一个完全本地的状态操作，也就是说：停止推送服务的状态不会保存到服务器上。
     * 如果停止推送服务后，开发者 App 被重新安装，或者被清除数据，JPush SDK 会恢复正常的默认行为（因为保存在本地的状态数据被清除掉了）。
     * 本功能其行为类似于网络中断的效果，即：推送服务停止期间推送的消息，恢复推送服务后，如果推送的消息还在保留的时长范围内，则客户端是会收到离线消息。
     *
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.init = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Android:
  
    * 开发者 App 可以通过调用停止推送服务 API 来停止极光推送服务，当又需要使用极光推送服务时，则必须要调用恢复推送服务 API。
    * 调用了本 API 后，JPush 推送服务完全被停止，具体表现为：
    * JPush Service 不在后台运行。
    * 收不到推送消息。
    * 不能通过 init 方法恢复，而需要调用 resumePush 恢复。
    * 极光推送其他所有的 API 调用都无效。
    * iOS:
    *
    * 不推荐调用，因为这个 API 只是让你的 DeviceToken 失效，在 设置－通知 中您的应用程序没有任何变化。建议设置一个 UI 界面， 提醒用户在 设置－通知 中关闭推送服务。
    *
    * @returns {Promise<any>}
    * @memberof JPush
    */
    JPush.prototype.stopPush = function () {
        return;
    };
    ;
    /**
     * 恢复推送服务。调用了此 API 后:
     * Android 平台:
     * 极光推送完全恢复正常工作。
     * iOS 平台:
     * 重新去 APNS 注册。
     *
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.resumePush = function () {
        return;
    };
    ;
    /**
     * Android 平台: 用来检查 Push Service 是否已经被停止。
     * iOS 平台: 平台检查推送服务是否注册。
     *
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.isPushStopped = function () {
        return;
    };
    ;
    /**
     * 集成了 JPush SDK 的应用程序在第一次成功注册到 JPush 服务器时，JPush 服务器会给客户端返回一个唯一的该设备的标识 - RegistrationID。 JPush SDK 会以广播的形式发送 RegistrationID 到应用程序。
     * 应用程序可以把此 RegistrationID 保存以自己的应用服务器上，然后就可以根据 RegistrationID 来向设备推送消息或者通知。
     *
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.getRegistrationID = function () {
        return;
    };
    ;
    /**
     * 设置标签。注意这个接口是覆盖逻辑，而不是增量逻辑。即新的调用会覆盖之前的设置。
     *
     * @param {{ sequence: number, tags?: string[] }} params  tags: Array，标签数组
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.setTags = function (params) {
        return;
    };
    ;
    /**
     * 新增标签。
     *
     * @param {{ sequence: number, tags?: string[] }} params  tags: Array，标签数组。
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.addTags = function (params) {
        return;
    };
    ;
    /**
     * 删除标签
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.deleteTags = function (params) {
        return;
    };
    ;
    /**
     * 清除所有标签。
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.cleanTags = function (params) {
        return;
    };
    ;
    /**
     * 获取当前绑定的所有标签。
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.getAllTags = function (params) {
        return;
    };
    ;
    /**
     * 查询指定tag与当前用户绑定的状态。
     *
     * @param {{ sequence: number, tag: string }} params  tag: string，待查询的 tag。
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.checkTagBindState = function (params) {
        return;
    };
    ;
    /**
     * 设置别名。注意这个接口是覆盖逻辑，而不是增量逻辑。即新的调用会覆盖之前的设置。
     *
     * @param {{ sequence: number, alias?: string }} params
     * sequence: number。用户自定义的操作序列号, 同操作结果一起返回，用来标识一次操作的唯一性。
     * alias: string。 每次调用设置有效的别名将覆盖之前的设置。 有效的别名组成：字母（区分大小写）、数字、下划线、汉字、特殊字符@!#$&*+=.|。 限制：alias 命名长度限制为 40 字节（判断长度需采用 UTF-8 编码）。
     * @returns {Promise<any>}
     * @memberof JPush
     */
    JPush.prototype.setAlias = function (params) {
        return;
    };
    ;
    JPush.prototype.deleteAlias = function (params) {
        return;
    };
    ;
    JPush.prototype.getAlias = function (params) {
        return;
    };
    ;
    JPush.prototype.setBadge = function (badgeNum) {
        return;
    };
    ;
    JPush.prototype.setApplicationIconBadgeNumber = function (badgeNum) {
        return;
    };
    ;
    JPush.prototype.getApplicationIconBadgeNumber = function () {
        return;
    };
    ;
    JPush.prototype.getUserNotificationSettings = function () {
        return;
    };
    ;
    JPush.prototype.addLocalNotificationForIOS = function (option) {
        return;
    };
    ;
    JPush.prototype.deleteLocalNotificationWithIdentifierKeyInIOS = function (identifierKey) {
        return;
    };
    ;
    JPush.prototype.clearAllLocalNotifications = function () {
        return;
    };
    ;
    JPush.prototype.setLocation = function (latitude, longitude) {
        return;
    };
    ;
    JPush.prototype.isPlatformIOS = function () {
        return;
    };
    ;
    JPush.prototype.addDismissActions = function (actions, categoryId) {
        return;
    };
    ;
    JPush.prototype.addNotificationActions = function (actions, categoryId) {
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
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setTags", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "addTags", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "deleteTags", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "cleanTags", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "getAllTags", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "checkTagBindState", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setAlias", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "deleteAlias", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "getAlias", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setBadge", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setApplicationIconBadgeNumber", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "getApplicationIconBadgeNumber", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "getUserNotificationSettings", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "addLocalNotificationForIOS", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "deleteLocalNotificationWithIdentifierKeyInIOS", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "clearAllLocalNotifications", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "setLocation", null);
    __decorate([
        Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "isPlatformIOS", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, String]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "addDismissActions", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, String]), 
        __metadata('design:returntype', Promise)
    ], JPush.prototype, "addNotificationActions", null);
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
            platforms: ['Android', 'iOS']
        }), 
        __metadata('design:paramtypes', [])
    ], JPush);
    return JPush;
}());
//# sourceMappingURL=index.js.map