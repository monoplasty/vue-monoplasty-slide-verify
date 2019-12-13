<template>
  <div id="app">
      <slide-verify @success="onSuccess" @fail="onFail" @refresh="onRefresh" :slider-text="text" :imgs="imgs"></slide-verify>
      <div>{{msg}}</div>
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
                ]
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
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
