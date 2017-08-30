<template>
	<div class="friend_link">
		<h2 class="friend_h2">
			<img src="../../static/images/fri_link_06.png">
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
				}
			}
		}
		
	}
</script>
<style scope>
	.midd_cont_news{width:100%;background: #f6f6f6;}
	.news,.friend_link{width:1200px;margin:0 auto;padding:50px 0;}
	.news_h2,.friend_h2{width:300px;margin:0 auto;}
	.news_h2 img,.friend_h2 img{display: block;width: 100%;}
</style>