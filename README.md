### 如何使用
1. 安装官方Cordova插件
```
ionic plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
```

2. 在当前项目`node_modules/@ionic-native/`下创建目录`j-push` 复制本项目文件到该目录下
> 建议不要使用`git clone`直接克隆项目到该文件夹，不然以后更新依赖时会报错

3. 在`app.module.ts`中引入,并加入到`@NgModule`的 `providers` 中

```
import { JPush } from '@ionic-native/j-push';

@NgModule({
  ...
  providers: [ JPush ],
})
export class AppModule { }

```

4. 在Component中调用方法

```
//...
import { JPush } from '@ionic-native/j-push';

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

