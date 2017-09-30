<template>
  <div id="app">
    <div class="outer">
      <div class="inner">
        <router-view></router-view>
        <FooterView></FooterView>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import FooterView from './components/Footer.vue'
export default {
  components:{
    Home,
    FooterView
  }
}
</script>

<style scoped>
    *{margin:0; padding:0;}
    body,html{height:100%; width:100%;}
    li{list-style: none;}
    a{text-decoration: none;}
    .outer{
      width:100%;
      min-height:100%;
      margin:0 auto;
      font-size:.25rem;
      font-family:"微软雅黑";
      position: relative;

    }
    .inner{
      width:100%;
      padding-bottom:1.1rem;
    }
    
</style>
