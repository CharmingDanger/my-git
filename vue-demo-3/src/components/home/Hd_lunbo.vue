<template>
	<div class="hd_lunbo">
		<div class="lunbo_cot">
			<img src="../../static/images/lunbo_2.png">
			<!-- <img src="images/lunbo_2.png">
			<ul class="lb_cir">
				<li></li>
				<li></li>
			</ul> -->
		</div>
		<div class="lunbo_lw">
			<h2 class="lunbo_lw_h2">来丸江西麻将</h2>
			<p class="wwg">全南昌首推随精玩法&nbsp;&nbsp;绝无外挂</p>
			<div class="lw_wem">
				<div class="lw_wem_img">
					<img src="../../static/images/bb_ewm_19.png">
				</div>
				<div class="bb_down">
					<div class="android">
						<span class="fa fa-android"></span>
						<p>安卓下载</p>
					</div>
					<div class="apple">
						<span class="fa fa-apple"></span>
						<p>iOS下载</p>
					</div>
				</div>
			</div>
		</div>
		<div class="fiex_rt_top" v-show="ewm_show">
			<p class="ewm_close">
				<span @click="ewm_close">x</span>
			</p>
			<div class="fiex_ewm">
				<img src="../../static/images/fixe_ewm_53.png">
			</div>
			<p class="fiex_gz">关注公众号领红包</p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				ewm_show:true,
			}
		},

		methods:{
			ewm_close(){
				this.ewm_show=false;
			}
		}
		
	}
</script>

<style scope>
	.hd_lunbo{width:100%;position: relative;}
	.lunbo_cot{position: relative;width:100%;overflow: hidden;}
	.lunbo_cot img{width:100%;display: block;float: left;margin-right:-100%;}
	.lunbo_cot ul{width:100%;position:absolute;left:0;bottom:0;padding:20px 0;text-align:center;background: rgba(0,0,0,.4);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000,endColorstr=#66000000);}
	.lunbo_cot ul li{background: #ffffff;width:30px;height:15px;margin:0 15px;display:inline-block;border-radius:10px;cursor:pointer;}

	.lunbo_lw{position: absolute;right:14%;top:12%;width:360px;padding:30px 0;background:rgba(255,255,255,.2);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33ffffff,endColorstr=#33ffffff);}
	.lunbo_lw_h2{font-size: 30px;width:100%;text-align: center;color:#f7ce85;}
	.wwg{font-size: 20px;margin:0 30px;color:#ffffff;line-height: 50px;border-bottom:1px solid rgba(255,255,255,.2);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33ffffff,endColorstr=#33ffffff);}
	.lw_wem{margin:0 40px;overflow: hidden;padding-top:30px;}
	.lw_wem_img{float: left;width:65%;}
	.lw_wem_img img{display: block;width:100%;}
	.bb_down{font-size: 40px;float:right;color:#ffffff;width:85px;}
	.bb_down .fa{padding:0 15px;border-radius: 100%;-moz-border-radius: 100%;-webkit-border-radius: 100%;background: rgba(0,0,0,.2);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33000000,endColorstr=#33000000);line-height: 60px;}
	.bb_down p{font-size: 16px;}
	.apple{padding-top:10px;}
	.fiex_rt_top{position: fixed;top:230px;right:36px;background: #ffffff;border: 1px solid #cccccc;border-radius: 3px;z-index: 99;}
	.ewm_close{text-align: right;}
	.ewm_close span{color:#878787;font-size: 20px;margin-right:10px;cursor: pointer;}
	.fiex_ewm{padding:0 15px;}
	.fiex_ewm img{display: block;width:100%;}
	.fiex_gz{font-size: 14px;line-height: 25px;padding:0 10px;}	
</style>