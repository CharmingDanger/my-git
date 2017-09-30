<template>
	<div class="outer">
		<div class="inner">
			<div class="back">
				<a href="javascript:;" onclick="window.history.go(-1);">&lt;返回</a>
			</div>
			<div class="cont">
				<div class="tpTime_paim">
					<div class="tp_time">
						<img src="../assets/images/zhong_16.png" alt="">
						<span class="time">投票时间：06月17日-06月25日</span>
					</div>
					<div class="tp_guize">
						<img src="../assets/images/jingao_19.png" alt="">
						<span>投票规则：每个微信号每天可以投3张不同选票</span>
					</div>
				</div>
				<div class="paim">
					<h2>最新排名</h2>
					<ul class="pai_all">
						<li class="person_item" v-for="(item, index) in allPeson">
							<p class="mingc" :style="{background:color[index%28]}">第{{index+1}}名</p>
							<p class="pians"><span class="zongp">{{item.zongp}}</span>票</p>
							<div class="name">
								<p>{{item.name}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	@import '../assets/css/paiming.css';
</style>
<script>
	export default{
		data(){
			return {
				allPeson:{},
				color:[
					'#FACE0B','#D20036','#FD9907','#033F40','#CECC05','#75393B','#FB6703','#326733','#424005','#060A76','#9B5406','#D06700','#8C0200','#007500','#6B3F40','#460049','#427578','#DD0069','#29034E','#666666','#9B640A','#390708','#832B03','#A202A2','#F93800','#3896CA','#679A01','#7000D5'
				]
			}
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('../src/data/allpeson.data').then(function(res){
					_this.allPeson=res.data;
					_this.allPeson=_this.JsonSort(_this.allPeson,"zongp");
				}).catch(function(err){
					console.log(err);
				})
			},
			JsonSort(json,key){
			    var num=null;
			    for(var j=0;j<json.length;j++){
			        for(var i=j+1;i<json.length;i++){
			        	//console.log(json[j][key],json[i][key])
			        	if(parseInt(json[j][key])<parseInt(json[i][key])){
			        		num=json[j];
			        		json[j]=json[i];
			        		json[i]=num;
			        	}

			        }
			        
			    }
			    //console.log(json);
			    return json;
			}
		}
	}
</script>