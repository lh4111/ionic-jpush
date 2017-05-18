# ionic-jpush
ionic jpush plugin

# Use

#### clone this repository
```
cd PROJECT_ROOT/node_modules/@ionic-native/

git clone https://github.com/lh4111/ionic-jpush.git

mv ionic-jpush j-push
```


#### 在项目中使用

1. 在`app.module.ts`中引入,并加入到`@NgModule的providers中`
```
import { JPush } from '@ionic-native/j-push';


@NgModule({
  ...
  providers: [ JPush ],
})
export class AppModule { }

```

2. Component中使用
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
