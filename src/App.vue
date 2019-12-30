<template>
  <div id="app">
    <slide-verify @success="onSuccess" @fail="onFail" @refresh="onRefresh"
                  :slider-text="text"
                  :pathTemplate="imagePage"
                  :imageType="imageType"
                  :isPrivate="private"
                  :imageNum="imageNum"></slide-verify>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        msg: '',
        text: '向右滑动->',
        imagePage: '../../static/loginImage/',
        imageType: 'jpg',
        imageNum: [200, 300],
        private: true
      }
    },
    methods: {
      onSuccess () {
        this.msg = 'login success'
      },
      onFail () {
        this.msg = ''
      },
      onRefresh () {
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
