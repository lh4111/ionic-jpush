### 如何使用

1. 在当前项目`node_modules/@ionic-native/`下创建目录`j-push` 复制本项目文件到该目录下
> 建议不要使用`git clone`直接克隆项目到该文件夹，不然以后更新依赖时会报错

2. 在`app.module.ts`中引入,并加入到`@NgModule`的 `providers` 中
```
import { JPush } from '@ionic-native/j-push';

@NgModule({
  ...
  providers: [ JPush ],
})
export class AppModule { }

```

3. 在Component中调用方法
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
