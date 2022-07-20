# vue-monoplasty-slide-verify

> A Vue plugin to slide verify [Demo](https://monoplasty.github.io/vue-monoplasty-slide-verify/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## Quick Start

###  1. Import vue-monoplasty-slide-verify into your vue.js project.

Using build tools:

```bash
npm install --save vue-monoplasty-slide-verify
```

```js
import Vue from 'vue';
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);
```

### 2. Now you have it. The simplest usage:

```html
<slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
<div>{{msg}}</div>
```

```js
export default {
        name: 'App',
        data(){
            return {
                msg: '',
            }
        },
        methods: {
            onSuccess(){
                this.msg = 'login success'
            },
            onFail(){
                this.msg = ''
            },
            onRefresh(){
                this.msg = ''
            }
        }
    }
```

### argument

| Param | Type | Describe | Version |
| :------: | :------: | :------: | :-----: |
| l | Number | block length | |
| r | Number | block circle radius | |
| w | Number | canvas width | |
| h | Number | canvas height | |
| sliderText | String | Slide filled right | 1.0.5 |
| imgs | Array | picture array 背景图数组，默认值 [] | 1.1.0 |
| accuracy | Number | 滑动验证的误差范围，默认值 5 | 1.1.1 |
| show | Boolean | 是否显示刷新按钮，默认值 true | 1.1.1 |

### callBack

| Event | Type | Describe | Version |
| :------: | :------: | :------: | :-----: |
| success | Function | success callback | 返回时间参数，单位为毫秒 |
| fail | Function | fail callback | |
| refresh | Function | 点击刷新按钮后的回调函数 | |
| again | Function | 检测到非人为操作滑动时触发的回调函数 | 1.1.1 |
| fulfilled | Function | 刷新成功之后的回调函数 | 1.1.1 |

## Document
### 国内镜像地址 [gitee镜像地址](https://gitee.com/monoplasty/vue-monoplasty-slide-verify)

### 更新记录
### V1.2.0
- 针对滑动事件增加节流操作, 默认节流时长为50。无法自定义时长。
- 提高性能。
#### V1.1.4 描述
- 修复传入图片数组取随机数报错问题。@zh-ti [gitee issue](https://gitee.com/monoplasty/vue-monoplasty-slide-verify/issues/I4O2TA)
- 优化组件销毁时，对全局事件的移除问题。
#### V1.1.3 描述
 - 解决IE 9 - 10 滑块显示bug，感谢大神 [@Guosugaz](https://github.com/Guosugaz) 修复此bug 🎉 [issue#26](https://github.com/monoplasty/vue-monoplasty-slide-verify/issues/26)
 - 修复 滑块成功后依然能滑动bug
 - 优化 图片未加载完成之前加载遮罩层
 - 增加滑动成功后的时间显示。单位毫秒。[issue#24](https://github.com/monoplasty/vue-monoplasty-slide-verify/issues/24)
#### V1.1.1 描述（此版本有bug,请使用最新版）
- `accuracy` 精度设置
> 判断滑块与凹槽位置的误差范围值，默认取值范围为 [1, 10]。若取值不为 -1，则会开启检测非人为操作。人为操作也有可能会触发哦！
>
> 判断依据是：滑块的一系列移动坐标的平均值和方差是否相等。若相等则人为是非人为操作。
>
> 若`accuracy`为 -1，则表示关闭检测非人为操作，默认开启。开启之后，若检测到为非人为操作，则会触发 `again` 回调函数
#### V1.1.0 版本新增属性`imgs`：
  - 当`imgs`不传或者传空数组时，图片库默认使用第三方api提供的图片路径。可能加载缓慢；
  - 当`imgs`传本地路径时，确保图片路径是否正确。建设传cdn上的图片地址。
  - 详情可参考`APP.vue`上的写法。或[在线查看demo地址](https://monoplasty.github.io/vue-monoplasty-slide-verify/)

### 内置方法
- 在父组件里如果需要重置，可以在父组件中调用子组件reset() 方法
```html
<slide-verify ref="slideblock" ></slide-verify>
```
```javascript
this.$refs.slideblock.reset();
```


## Log
### V1.1.2
1. 修复`imgs`不传时，页面的 warning 问题
### V1.1.1 （此版本有bug,请使用最新版）
1. 增加**滑动验证的精度设置**
2. 增加**滑块刷新成功后的回调函数**
3. 可配置刷新按钮的显示
4. 可配置是否开启非人为操作（防止非人为操作滑动解锁）
### V1.1.0
- add img array (增加可配置的图片地址接口)
### V1.0.5
- add slider text (增加可自定义滑块文本)
### V1.0.2
- Mobile terminal touch event support (支持移动端事件)

## example
可参考如下用法：
```html
<template>
  <slide-verify ref="slideblock" @again="onAgain" @fulfilled="onFulfilled" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :slider-text="text" :accuracy="accuracy"></slide-verify>
  <button @click="handleClick">在父组件可以点我刷新哦</button>
  <div>{{msg}}</div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
                msg: '',
                text: '向右滑动->',
                // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
                accuracy: 1,
            }
        },
        methods: {
            onSuccess(times){
                console.log('验证通过，耗时 +' times + '毫秒');
                this.msg = 'login success, 耗时${(times / 1000).toFixed(1)}s'
            },
            onFail(){
                console.log('验证不通过');
                this.msg = ''
            },
            onRefresh(){
                console.log('点击了刷新小图标');
                this.msg = ''
            },
            onFulfilled() {
                console.log('刷新成功啦！');
            },
            onAgain() {
                console.log('检测到非人为操作的哦！');
                this.msg = 'try again';
                // 刷新
                this.$refs.slideblock.reset();
            },
            handleClick() {
                this.$refs.slideblock.reset();
            },
        }
    }
</script>
```
