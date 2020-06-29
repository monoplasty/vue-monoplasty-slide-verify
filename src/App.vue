<template>
  <div id="app">
      <slide-verify ref="slideblock" @success="onSuccess" @again="onAgain" @fulfilled="onFulfilled" @fail="onFail" @refresh="onRefresh" :slider-text="text" :imgs="imgs" :accuracy="accuracy"></slide-verify>
      <div>{{msg}}</div>
      <button class="btn" @click="handleClick">在父组件可以点我刷新哦</button>
  </div>
</template>

<script>
    import img0 from './assets/img.jpg';
    import img1 from './assets/img1.jpg';
    import img2 from './assets/img2.jpg';
    import img3 from './assets/img3.jpg';
    import img4 from './assets/img4.jpg';
    import img5 from './assets/img5.jpg';
    export default {
        name: 'App',
        data(){
            return {
                msg: '',
                text: '向右滑动->',
                imgs: [
                  img0,
                  img1,
                  img2,
                  img3,
                  img4,
                  img5,
                ],
                accuracy: 1, // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
            }
        },
        methods: {
            onSuccess(times){
                console.log('验证通过');
                this.msg = `login success, 耗时${(times / 1000).toFixed(1)}s`;
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
                this.handleClick();
            },
            handleClick() {
                this.$refs.slideblock.reset();
                this.msg = ''
            },
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .btn {
      margin-top: 20px;
      outline: 0;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      color: #fff;
      background-color: #1890ff;
      cursor: pointer;
    }
    .btn:active {
      box-shadow: 1px 5px 0 rgba(0, 0, 0, 0.1) inset;
    }
</style>
