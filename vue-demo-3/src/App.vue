<template>
  <div id="app">
    <div class="outer">
      <div class="inner">
        <v-header></v-header>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div class="toTop" v-show="show" @click="totop">顶部</div>
        </transition>
        <div>
          <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
            <router-view></router-view>
          </transition>
        </div>
        <v-footer></v-footer>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      show:false,
      Time:null,
    }
  },
  components:{
    'v-footer':footer,
    'v-header':header,
  },
  methods:{
    scrollEvent(){
      if(document.body.scrollTop>=300){
        this.show=true;
      }else{
        this.show=false;
      }
    },
    totop(){
      this.Time=setInterval(this._time,10);
    },
    _time(){
      var scro_t=document.body.scrollTop;
      if(scro_t<=0){
        clearInterval(this.Time);
        document.body.scrollTop=0;
        return;
      }
      var sped=Math.ceil((document.body.scrollTop-0)/10);
      document.body.scrollTop=(document.body.scrollTop-sped);

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent);
  }
}
</script>
<style scope>
  .toTop{width:40px;height:50px;background: #c56d18;color:#ffffff;position: fixed;right:5px;bottom:190px;line-height: 50px;cursor:pointer;z-index: 9999;}
  .toTop:hover{background:rgb(255, 153, 0);}
</style>

