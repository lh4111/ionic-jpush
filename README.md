### 更新说明

官方phonegap插件jpush-phonegap-plugin更新了Api。
ionic3-jpush 1.2.0 需要jpush-phonegap-plugin >= 3.2.4。

>若你的项目适用jpush-phonegap-plugin < 3.24 请使用 ionic3-jpush 1.1.0 `npm i ionic3-jpush@1.1 --save`

#### 以下Api参数发生变化
Alias API
- setAlias
- deleteAlias
- getAlias

Tag API
- setTags
- addTags
- deleteTags
- cleanTags
- getAllTags
- checkTagBindState

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