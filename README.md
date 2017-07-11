### 如何使用
1. 安装官方Cordova插件
```
ionic plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
```

2. 安装模块`ionic3-jpush`
```
npm i ionic3-jpush -S
```

3. 在`app.module.ts`中引入,并加入到`@NgModule`的 `providers` 中

```
import { JPush } from 'ionic3-jpush';

@NgModule({
  ...
  providers: [ JPush ],
})
export class AppModule { }

```

4. 在Component中调用方法

```
//...
import { JPush } from 'ionic3-jpush';

@Component({
    template: `
        <ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  constructor (public jPush: JPush){

    this.jPush.getRegistrationID().then(regid => {
      console.log(regid)
    })

  }
}

```

### Api说明
- [通用 API 说明（同时适用于 Android 和 iOS 系统）](https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md)
- [iOS API](https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/iOS_API.md)
- [Android API ](https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Android_detail_api.md)

### 实现方法

> 因项目需求只实现了目前项目中使用到的方法,如需更多方法请提交issue

- [x] init(): Promise<any>;
- [x] stopPush(): Promise<any>;
- [x] resumePush(): Promise<any>;
- [x] isPushStopped(): Promise<any>;
- [x] getRegistrationID(): Promise<any>;
- [x] setTagsWithAlias(tags?: string[], alias?: string): Promise<any>;
- [x] setTags(tags?: string[]): Promise<any>;
- [x] setAlias(alias?: string): Promise<any>;
- [x] setBadge(badgeNum?: number): Promise<any>;
- [x] getUserNotificationSettings(): Promise<any>;
- [x] openNotification(): Observable<any>;
- [x] receiveNotification(): Observable<any>;
- [x] receiveMessage(): Observable<any>;

v1.1.0 update iOS Api
- [x] setApplicationIconBadgeNumber(badgeNum?: number): Promise<any>;
- [x] getApplicationIconBadgeNumber(): Promise<any>;
- [x] addLocalNotificationForIOS(option: LocalNotificationOption): Promise<any>;
- [x] deleteLocalNotificationWithIdentifierKeyInIOS(identifierKey: String): Promise<any>;
- [x] clearAllLocalNotifications(): Promise<any>;
- [x] setLocation(latitude: String | Number, longitude: String | Number): Promise<any>;
- [x] isPlatformIOS(): Promise<any>;
- [x] addDismissActions(actions: any, categoryId: String): Promise<any>;
- [x] addNotificationActions(actions: any, categoryId: String): Promise<any>;
