<template>
	<div id="footer">
		<div class="footer_btn">
      <div class="wy_baom">
      	<router-link to="/paoming">
          <a href="javascript:;" class="wy_baom_link">
            <img src="src/assets/images/报名 (3).png">
            <p>我要报名</p>
          </a>
        </router-link>
      </div>
      <div class="footer_see_pm">
        <router-link to="/paiming">
          <a href="javascript:;" class="footer_pm_link">
            <img src="src/assets/images/排名.png">
            <p>查看排名</p>
          </a>
        </router-link>
      </div>
    </div>
	</div>
</template>
<style scoped>
	a{text-decoration:none;}
	.footer_btn{
      width:100%;
      padding:.1rem 0;
      background: #000;
      font-size: 0;
      position: fixed;
      bottom:0;
      left:0;
      z-index: 999;
    }
    .wy_baom,.footer_see_pm{
      width:50%;
      display: inline-block;
      font-size: .25rem;
    }
    .footer_btn a{
      display: block;
      width:100%;
      text-align: center;
      color:#fff;
    }
    .footer_btn a img{
      width:.48rem;
      height:auto;
      display: block;
      margin: 0 auto;
    }
</style>