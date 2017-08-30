<template>
	<div>
		<div class="midd_cont">
			<lunbo-cot></lunbo-cot>
			<midd-cont-news></midd-cont-news>
			<friend-link></friend-link>
		</div>
	</div>
</template>
<script>
	import HdLunbo from './Hd_lunbo.vue'
	import MiddContNews from './Midd_cont_news.vue'
	import FriendLink from './Friend_link.vue'
	export default{
		components:{
			'lunbo-cot':HdLunbo,
			'midd-cont-news':MiddContNews,
			'friend-link':FriendLink
		}
		
	}
</script>