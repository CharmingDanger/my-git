<template>
  <div id="app">
    <div class="outer">
      <div class="inner">
        <div class="hd">
          <div class="hd_nav">
            <div class="hd_nav_list">
              <ul class="hd_nav_lt">
                <li class="hd_navitem hd_navitem_img">
                  <a href="http://www.zkyouxi.com/" title="来丸江西麻将">
                    <img src="./static/images/laiwan_hd.png" alt="来丸江西麻将">
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
                <li class="hd_navitem _kf_ewm_show">
                  <a>微信客服</a>
                  <div class="wx_kf">
                    <div class="wx_kf_line">
                      <div class="wx_kf_jt"></div>
                    </div>
                    <img src="images/kefu_03.png">
                    <p>客服微信：zkncmj01</p>
                  </div>
                </li>
                <li class="hd_navitem money">
                  <a>代理招募</a>
                  <div class="daili_zm">
                    <div class="daili_zm_line">
                      <div class="daili_zm_jt"></div>
                    </div>
                    <img src="images/招代理微信.jpg">
                    <p>代理联系微信：zkncmj888</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="toTop">顶部</div>
        <div>
          <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
            <router-view></router-view>
          </transition>
        </div>
        <div class="footer">
          <div class="footer_con">
            <div class="bb_gg">
              <p>广州掌昆网络科技有限公司</p>
              <p>广州掌昆网络科技有限公司广州市天河区天河北路906号2204房&nbsp;&nbsp;|&nbsp;&nbsp;座机：020-22093063</p>
              <p>粤ICP备17054793号-1&nbsp;软著登字第1770266号&nbsp;&nbsp;网络文化经营许可证：粤网文（2017）5345-1226号</p>
              <p>健康游戏公告：抵制不良游戏&nbsp;&nbsp;拒绝盗版游戏&nbsp;&nbsp;文明游戏&nbsp;&nbsp;禁止赌博</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  #app{height:100%;width:100%;}
</style>

