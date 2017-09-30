<template>
	<div class="outer">
		<div class="inner">
			<div class="back">
				<a href="javascript:;" onclick="window.history.go(-1)">&lt;返回</a>
			</div>
			<div class="cont">
				<div class="pers_name">
					<div class="pm_name">
						<span class="no_n">{{peson.id}}</span>.
						<span class="name">{{peson.name}}</span>
					</div>
					<div class="toux">
						<img :src="peson.photo">
					</div>
				</div>
				<div class="qt_news">
					<ul class="qt_news_list">
						<li class="qt_news_item">
							<strong>姓名：</strong>
							<span class="qt_news_name">{{peson.name}}</span>
						</li>
						<li class="qt_news_item">
							<strong>星座：</strong>
							<span class="xingz">{{peson.xz}}</span>
						</li>
						<li class="qt_news_item">
							<strong>参赛宣言：</strong>
							<span class="xuanyan">{{peson.xy}}</span>
						</li>
						<li class="qt_news_item piaos">
							<strong>已获投票数：</strong>
							<strong>{{peson.zongp}}</strong>
						</li>
						<li class="qt_news_item">
							<a href="#" class="tiaop">
								<i class="fa fa-thumbs-up"></i>
								<span>投她一票</span>
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
		mounted(){
			if(this.checkNumber(this.$router.history.current.params.id)){
				this.fetchData(this.$router.history.current.params.id-1)
			}else{
				this.nameData(this.$router.history.current.params.id);
			}
		},
		data(){
			return {
				peson:{}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('../src/data/allpeson.data').then(function(res){
					if(id>=res.data.length){
						alert("您输入的编号不存在");
						return;
					}
					_this.peson=res.data[id];
				}).catch(function(err){
					console.log(err);
				})
			},
			nameData(name){
				var _this=this;
				this.$http.get('../src/data/allpeson.data').then(function(res){
					console.log(res.data.length)
					for(var j=0;j<res.data.length;j++){
						if(name==res.data[j]["name"]){
							_this.peson=res.data[j];
							return;
						}
					}
					alert("您输入的名称不存在");
					return;
					// _this.peson=res.data[id];
				}).catch(function(err){
					console.log(err);
				})
			},
			checkNumber(theObj) {
			  var reg = /^[0-9]+.?[0-9]*$/;
			  if (reg.test(theObj)) {
			    return true;
			  }
			  return false;
			}
		}
	}
</script>
<style scoped>
	@import "../assets/css/person_zl.css";
</style>