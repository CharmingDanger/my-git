<template>
	<div class="hd">
      <div class="hd_nav">
        <div class="hd_nav_list">
          <ul class="hd_nav_lt">
            <li class="hd_navitem hd_navitem_img">
              <a href="http://www.zkyouxi.com/" title="来丸江西麻将">
                <img src="../static/images/laiwan_hd.png" alt="来丸江西麻将">
              </a>
            </li>
          </ul>
          <ul class="hd_nav_rt">
            <li class="hd_navitem">
              <a href="http://www.zkyouxi.com/">官网首页</a>
            </li>
            <li class="hd_navitem">
              <router-link to="/news">新闻公告</router-link>
            </li>
            <li class="hd_navitem">
              <router-link  to="/aboutus">关于我们</router-link>
            </li>
            <li class="hd_navitem">
              <router-link  to="/shwhz">商务合作</router-link>
            </li>
            <li class="hd_navitem _kf_ewm_show" @mouseover="mouseOver1" ref="wxkf">
              <a>微信客服</a>
              <div class="wx_kf" v-show="kf_show">
                <div class="wx_kf_line">
                  <div class="wx_kf_jt"></div>
                </div>
                <img src="../static/images/kefu_03.png">
                <p>客服微信：zkncmj01</p>
              </div>
            </li>
            <li class="hd_navitem money" @mouseover="mouseOver2" ref="dlzm">
              <a>代理招募</a>
              <div class="daili_zm" v-show="dl_show">
                <div class="daili_zm_line">
                  <div class="daili_zm_jt"></div>
                </div>
                <img src="../static/images/招代理微信.jpg">
                <p>代理联系微信：zkncmj888</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    data (){
      return {
        kf_show:false,
        dl_show:false,
      }
    },
    methods:{
      mouseOver1(){
        this.kf_show=true;
        this.dl_show=false;
      },
      mouseOver2(){
        this.dl_show=true;
        this.kf_show=false;
      },
      doc_cli(){
        var target=event.Elament||event.target;
        while(target){
          if(target==this.$refs.wxkf||target==this.$refs.dlzm){
            return false;
          }
          target=target.parentNode;
        }
        this.dl_show=false;
        this.kf_show=false;
      }

    },
    mounted() {
      window.addEventListener('click', this.doc_cli);
    }
  }
</script>
<style scope>
  .hd{width:100%;background:#f3f3f3;}
  .hd_nav{width:1200px;height:90px;margin:0 auto;}
  .hd_nav_list{width:100%;height:100%;}
  .hd_nav_lt{float:left;}
  .hd_navitem_img{position: relative;width:170px;height:90px;}
  .hd_navitem_img a{display: block;width:100%;position: absolute;top:50%;margin-top:-31px;left:0;}
  .hd_nav_lt img{display: block;width:100%;height: auto;}
  .hd_navitem{float:left;line-height: 90px;position: relative;z-index: 999;}
  .hd_nav_rt{float:right;margin-right:20px;}
  .hd_nav_rt a{display:block;padding:0 20px;color:#c56d18;border:0;cursor: pointer;font-size: 18px;}
  .hd_nav_rt a:hover{color:#ffffff;background: rgb(255, 153, 0);}

  ._kf_ewm_show a img,.money a img{width:22px;}
  .wx_kf,.daili_zm{width:140px;position: absolute;top:90px;left:0;line-height: 20px;margin-left:-44px;background:#ffffff;padding:15px;border: 2px solid #cccccc;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
  .wx_kf p,.daili_zm p{font-size: 14px;padding-top:10px;}
  .wx_kf_line,.daili_zm_line{width:172px;height:3px;position: absolute;top:-3px;left:-1px;background: #ff9900;}
  .wx_kf_jt,.daili_zm_jt{width:0;height:0;border:7px solid transparent;border-bottom-color:#ff9900;position: absolute;left:50%;margin-left:-2px;top:-14px;}
  .wx_kf img,.daili_zm img{display: block;width:100%;}
</style>