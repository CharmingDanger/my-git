<template>
	<div class="news">
		<h2 class="news_h2">
			<img src="../../static/images/news_78.png">
		</h2>
		<div class="news_cont">
			<ul class="news_cont_list">
				<li class="news_cont_item" v-for="img_item in news_item" >
					<a :href="img_item.img_link">
						<img :src="`./src/static/images/${img_item.img_name}`">
						<div class="news_cont_t">
							<p>{{img_item.img_js}}</p>
							<p>{{img_item.img_time}}</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
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
<style scope>
	.friend_link_list{padding:0 24px 30px;margin-top:30px;background: #f2f3f6;text-align: left;}
	.friend_link_item{font-size: 16px;margin:25px 10px 0;display: inline-block;color:#737373;}
	.friend_link_item a{color:#737373;font-size: 16px;display: block;width:170px;text-align: center;line-height: 38px;border:1px solid #E9EDF0;border-radius:5px;background: -webkit-linear-gradient(bottom,#ffffff,#F6F7F9);background: -o-linear-gradient(bottom,#ffffff,#F6F7F9);background: -ms-linear-gradient(bottom,#ffffff,#F6F7F9);background: -moz-linear-gradient(bottom,#ffffff,#F6F7F9);}
	.friend_link_item a:hover{color:#ffffff;background: rgb(255, 153, 0);}
	.news_cont_list{overflow: hidden;font-size: 0;padding-bottom: 50px;}
	.news_cont_item{width:360px;height:368px;margin:40px 20px 0;float: left;font-size: 16px;background: #ffffff;}
	.news_cont_item a{display: block;color:#737373;}
	.news_cont_item a:hover{color:rgb(255, 153, 0);}
	.news_cont_item img{display: block;width:100%;}
	.news_cont_t{padding:20px 0;line-height: 25px;border:1px solid #DBDADA;margin-top: -1px;box-shadow: 0px 2px 1px #ddd;box-shadow: 0px 2px 1px #dddddd;-webkit-box-shadow: 0px 2px 1px #dddddd;-moz-box-shadow: 0px 2px 1px #dddddd;}
	._link_list{overflow: hidden;margin:0 auto;font-size: 0;}
	/*新闻hover放大效果*/
	.news_cont_item { transition:transform 0.25s ease;	}
	.news_cont_item:hover { transform:scale(1.05,1.05); }
	/*右边悬浮二维码框点击效果*/
	.fiex_rt_top{ transition:transform 0.5s ease;}
</style>