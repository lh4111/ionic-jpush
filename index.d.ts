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
    init(): Promise<any>;
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
    stopPush(): Promise<any>;
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
    resumePush(): Promise<any>;
    /**
     * Android 平台: 用来检查 Push Service 是否已经被停止。
     * iOS 平台: 平台检查推送服务是否注册。
     *
     * @returns {Promise<any>}
     * @memberof JPush
     */
    isPushStopped(): Promise<any>;
    /**
     * 集成了 JPush SDK 的应用程序在第一次成功注册到 JPush 服务器时，JPush 服务器会给客户端返回一个唯一的该设备的标识 - RegistrationID。 JPush SDK 会以广播的形式发送 RegistrationID 到应用程序。
     * 应用程序可以把此 RegistrationID 保存以自己的应用服务器上，然后就可以根据 RegistrationID 来向设备推送消息或者通知。
     *
     * @returns {Promise<any>}
     * @memberof JPush
     */
    getRegistrationID(): Promise<any>;
    /**
     * 设置标签。注意这个接口是覆盖逻辑，而不是增量逻辑。即新的调用会覆盖之前的设置。
     *
     * @param {{ sequence: number, tags?: string[] }} params  tags: Array，标签数组
     * @returns {Promise<any>}
     * @memberof JPush
     */
    setTags(params: {
        sequence: number;
        tags?: string[];
    }): Promise<any>;
    /**
     * 新增标签。
     *
     * @param {{ sequence: number, tags?: string[] }} params  tags: Array，标签数组。
     * @returns {Promise<any>}
     * @memberof JPush
     */
    addTags(params: {
        sequence: number;
        tags?: string[];
    }): Promise<any>;
    /**
     * 删除标签
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<any>}
     * @memberof JPush
     */
    deleteTags(params: {
        sequence: number;
    }): Promise<any>;
    /**
     * 清除所有标签。
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<any>}
     * @memberof JPush
     */
    cleanTags(params: {
        sequence: number;
    }): Promise<any>;
    /**
     * 获取当前绑定的所有标签。
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<any>}
     * @memberof JPush
     */
    getAllTags(params: {
        sequence: number;
    }): Promise<any>;
    /**
     * 查询指定tag与当前用户绑定的状态。
     *
     * @param {{ sequence: number, tag: string }} params  tag: string，待查询的 tag。
     * @returns {Promise<any>}
     * @memberof JPush
     */
    checkTagBindState(params: {
        sequence: number;
        tag: string;
    }): Promise<any>;
    /**
     * 设置别名。注意这个接口是覆盖逻辑，而不是增量逻辑。即新的调用会覆盖之前的设置。
     *
     * @param {{ sequence: number, alias?: string }} params
     * sequence: number。用户自定义的操作序列号, 同操作结果一起返回，用来标识一次操作的唯一性。
     * alias: string。 每次调用设置有效的别名将覆盖之前的设置。 有效的别名组成：字母（区分大小写）、数字、下划线、汉字、特殊字符@!#$&*+=.|。 限制：alias 命名长度限制为 40 字节（判断长度需采用 UTF-8 编码）。
     * @returns {Promise<any>}
     * @memberof JPush
     */
    setAlias(params: {
        sequence: number;
        alias?: string[];
    }): Promise<any>;
    deleteAlias(params: {
        sequence: number;
    }): Promise<any>;
    getAlias(params: {
        sequence: number;
    }): Promise<any>;
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
