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
export declare class JPush {
    init(): Promise<any>;
    stopPush(): Promise<any>;
    resumePush(): Promise<any>;
    isPushStopped(): Promise<any>;
    getRegistrationID(): Promise<any>;
    setTagsWithAlias(tags?: string[], alias?: string): Promise<any>;
    setTags(tags?: string[]): Promise<any>;
    setAlias(alias?: string): Promise<any>;
    setBadge(badgeNum?: number): Promise<any>;
    setApplicationIconBadgeNumber(badgeNum?: number): Promise<any>;
    getApplicationIconBadgeNumber(): Promise<any>;
    getUserNotificationSettings(): Promise<any>;
    addLocalNotificationForIOS(option: LocalNotificationOption): Promise<any>;
    deleteLocalNotificationWithIdentifierKeyInIOS(identifierKey: String): Promise<any>;
    clearAllLocalNotifications(): Promise<any>;
    setLocation(latitude: String | Number, longitude: String | Number): Promise<any>;
    isPlatformIOS(): Promise<any>;
    addDismissActions(actions: any, categoryId: String): Promise<any>;
    addNotificationActions(actions: any, categoryId: String): Promise<any>;
    openNotification(): Observable<any>;
    receiveNotification(): Observable<any>;
    receiveMessage(): Observable<any>;
}
export interface LocalNotificationOption {
    delayTime: String | Number;
    content: String;
    badge: String | Number;
    notificationID: String;
    extras: Object;
}
export interface DismissActions {
    title: String;
    identifier: String;
    option: String;
    type?: String;
    textInputButtonTitle?: String;
    textInputPlaceholder?: String;
}
