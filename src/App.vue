<template>
  <div id="app">
      <slide-verify @success="onSuccess" @fail="onFail" @refresh="onRefresh" :slider-text="text"></slide-verify>
      <div>{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
                msg: '',
                text: 'hello',
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
