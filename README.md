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

## Document

### argument

| Param | Type | Describe |
| :------: | :------: | :------: |
| l | Number | block length |
| r | Number | block circle radius |
| w | Number | canvas width |
| h | Number | canvas height |
| sliderText | String | Slide filled right |

### callBack

| Event | Type | Describe |
| :------: | :------: | :------: |
| success | Function | success callback |
| fail | Function | fail callback |
| refresh | Function | refresh button callback |


## Log
### V1.0.2
- Mobile terminal touch event support
### V1.0.5
- add slider text
