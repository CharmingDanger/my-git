<template>
	<div>
		<div class="midd_cont">
			<div class="hd_lunbo">
				<div class="lunbo_cot">
					<img src="../static/images/lunbo_2.png">
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
							<img src="../static/images/bb_ewm_19.png">
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
				<div class="fiex_rt_top">
					<p class="ewm_close">
						<span>x</span>
					</p>
					<div class="fiex_ewm">
						<img src="../static/images/fixe_ewm_53.png">
					</div>
					<p class="fiex_gz">关注公众号领红包</p>
				</div>
			</div>
			<div class="midd_cont_news">
				<div class="news">
					<h2 class="news_h2">
						<img src="../static/images/news_78.png">
					</h2>
					<div class="news_cont">
						<ul class="news_cont_list">
							<li class="news_cont_item" v-for="img_item in news_item" >
								<a :href="img_item.img_link">
									<img :src="`./dist/${img_item.img_name}`">
									<div class="news_cont_t">
										<p>{{img_item.img_js}}</p>
										<p>{{img_item.img_time}}</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="friend_link">
				<h2 class="friend_h2">
					<img src="../static/images/fri_link_06.png">
				</h2>
				<div class="friend_link_list">
					<ul class="_link_list">
						<!-- <li class="friend_link_item" v-for="val in fri_link_item">
							<a :href="val.http">
								{{val.Name}}
							</a>
						</li> -->
						<li class="friend_link_item" v-for="(val,key) in fri_link_item">
							<a :href="key">
								{{val}}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				/*fri_link_item:[
					{'http':'http://www.zkyouxi.com/','Name':'来丸江西麻将'},
					{'http':'http://www.8477.com/','Name':'8477手游网'},
					{'http':'http://www.bianwanjia.com/','Name':'便玩家手游网'},
				]*/

				fri_link_item:{
					'http://www.zkyouxi.com/':'来丸江西麻将',
					'http://www.8477.com/':'8477手游网',
					'http://www.bianwanjia.com/':'便玩家手游网',
				},
				news_item:[
					{
						'img_link':'##',
						'img_name':'game_gift_for_online.jpg',
						'img_js':'来丸南昌麻将公测活动',
						'img_time':'2017.7.19'
					},
					{
						'img_link':'##',
						'img_name':'how_to_be_agent.jpg',
						'img_js':'来丸南昌麻将招代理',
						'img_time':'2017.6.9'
					},
					{
						'img_link':'##',
						'img_name':'majiang_random_play_way.jpg',
						'img_js':'南昌麻将“随精”玩法全解析',
						'img_time':'2017.6.9'
					},
				]
			}
		}
	}
</script>