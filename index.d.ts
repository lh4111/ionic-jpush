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
    getUserNotificationSettings(): Promise<any>;
    openNotification(): Observable<any>;
    receiveNotification(): Observable<any>;
    receiveMessage(): Observable<any>;
}
