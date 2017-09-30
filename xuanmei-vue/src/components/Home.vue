<template>
	<div>
		<div class="header_img">
          <img src="src/assets/images/header_img_02.png">
        </div>
        <div class="hd_time">
          <ul class="hd_list">
            <li>
              <img src="src/assets/images/zhong_03.png">
              <span>活动时间：2017年06月12日-2017年06月25日</span>
            </li>
            <li>
              <img src="src/assets/images/baoming_06.png">
              <span>报名时间：06月12日-06月16日</span>
            </li>
            <li>
              <img src="src/assets/images/aixin_09.png">
              <span>投票时间：06月17日-06月25日</span>
            </li>
            <li>
              <img src="src/assets/images/jian_11.png">
              <span>公布时间：06月27日</span>
            </li>
            <li>
              <img src="src/assets/images/huodong_13.png">
              <span>活动对象：微信参与者</span>
            </li>
            <li>
              <img src="src/assets/images/didian_15.png"><span>报名方式：点击左下角“我要报名”或链接：</span>
            </li>
            <li>
              <a href="#" class="baomin_link">http://www.baidu.com</a>
            </li>
          </ul>
        </div>
        <div class="jp_inner">
          <h2 class="jp_header">奖品内容</h2>
          <div class="jp_paiming">
            <ul class="jp_paiming_list">
              <li>
                <div class="mingci">
                  <span>第</span>
                  <img src="src/assets/images/no.1_18.png">
                  <span>名</span>
                </div>
                <div class="mingci_jl">
                  <div>
                    <p class="jp_item">SK-II神仙水+小红瓶紧致奢宠礼盒+ 100房卡</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="mingci">
                  <span>第</span>
                  <img src="src/assets/images/no.2_38.png">
                  <span>名</span>
                </div>
                <div class="mingci_jl">
                  <div>
                    <p class="jp_item">SK-II神仙水晶透修护礼盒+50房卡</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="mingci">
                  <span>第</span>
                  <img src="src/assets/images/no.3_37.png">
                  <span>名</span>
                </div>
                <div class="mingci_jl">
                  <div>
                    <p class="jp_item">dior花漾甜心女士香水50ML + 20房卡</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="mingci">
                  <span>第</span>
                  <img src="src/assets/images/no.4_5_43.png">
                  <span>名</span>
                </div>
                <div class="mingci_jl">
                  <div>
                    <p class="jp_item">YSL圣罗兰口红 + 10房卡</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="mingci">
                  <span>第</span>
                  <span class="no_n">6~10</span>
                  <span>名</span>
                </div>
                <div class="mingci_jl">
                  <div>
                    <p class="jp_item">50元微信红包 + 5房卡 </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="jp_faf">
          <h2 class="jp_faf_header">奖品发放</h2>
          <p class="jp_faf_js">活动结束后官方公众号发送获奖结果，并联系获奖人与其沟通，安排发放奖品。</p>
          
        </div>
        <div class="cansai_inner">
          <div class="rearch">
            <div class="rearch_box">
              <input placeholder="请输入选手名称或编号" type="text" ref="inp" v-model="numberName">
            </div>
            <div class="rearch_btn">
              <button>
                <img src="src/assets/images/btn_64.png">
                <router-link :to="'/peson/'+numberName">
                	<span>搜索</span>
                </router-link>
              </button>
            </div>
          </div>
          <div class="see_pm">
          	<router-link to="/paiming">
            	<a href="javascript:;" class="see_pm_link">查看排名</a>
          	</router-link>
          </div>
          <div class="cansai_xs">
            <ul class="xs_list_lt">
            	<li v-for="(item,index) in allPeson">
					<router-link :to="'/peson/'+item.id">
		                <div class="xs_img">
		                	<a href="javascript:viod(0);" class="xs_img_link">
		                    	<img :src="item.photo" class="xs_toux">
		                    	<p class="xs_pos">{{index+1}}.{{item.name}}</p>
		                	</a>
		                </div>
		            </router-link>
	                <div class="tuopiao">
	                	<button>
	                    	<img src="src/assets/images/zan_86.png">
	                    	<span>投票</span>
	                	</button>
	                </div>
	                <div class="piaoshu">
	                	<p>{{item.zongp}}票</p>
	                </div>
            	</li>
            </ul>
          </div>
        </div>
	</div>
</template>
<script>
	// import {mapGetters} from 'vuex'
	export default{
		data(){
			return {
				allPeson:{},
				numberName:""
			}
		},
		/*computed:mapGetters([
			'numberName'
		]),*/
		watch:{
			$route(to){
				var _this=this;
				this.searchPeson(_this.$refs.inp.value);
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
				}).catch(function(err){
					console.log(err);
				})
			}
			/*searchPeson(val){
				if(typeof(val) == "number"){
					if(val<=this.dataLen){
						this.$store.dispatch('NUMBER_HAVE')
					}else{
						this.$store.dispatch('NUMBER_NO')
						alert("您输入的编号不存在");
					}

				}else{
					this.$store.dispatch('NAME_HAVE')
				}

			}*/
		}
	}
</script>
<style scoped>
	a{text-decoration:none;}
	.header_img{
      width:100%;
    }
    .header_img img{
      width:100%;
      height:auto;
      display: block;
    }
    .hd_time{
      margin-top:.25rem;
      padding:0 .25rem;
      font-size:.25rem;
    }
    .hd_list{
      width:100%;
      text-align: left;
    }
    .hd_list li{
      padding-top:.1rem;
      vertical-align: middle;
      font-size: 0;
    }
    .hd_list li img{
      width:.25rem;
      height:auto;
      display: inline-block;
      vertical-align: middle;
      margin-right:.1rem;
    }
    .hd_list li span{
      display: inline-block;
      vertical-align: middle;
      font-size:.25rem;
    }
    .baomin_link{
      margin-left:.35rem;
      font-size:.25rem;
    }
    .jp_inner,.jp_faf{
      width:100%;
      margin-top:.3rem;
    }
    .jp_header,.jp_faf_header{
      width:2.1rem;
      height:0.56rem;
      line-height: 0.56rem;
      background:#994aef;
      font-size: .3rem;
      text-align: center;
      color:#fff;
    } 

    .jp_paiming{
      padding:0 .25rem;
    }
    .jp_paiming_list{
      width:100%;
    }
    .jp_paiming_list li{
      height:.88rem;
      margin-top:.2rem;
      width:100%;
      box-sizing:border-box;
    }
    .mingci{
      height:.88rem;
      line-height: .88rem;
      float: left;
      margin-right: .1rem;
      vertical-align: middle;
    }
    .mingci span{
      display: inline-block;
    }
    .mingci img{
      width:.76rem;
      border:0;
      height:auto;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
    }
    .mingci_jl{
      overflow: hidden;
    }
    .mingci_jl div{
      box-sizing: border-box;
      border: 1px solid #e0c8fa;
      width: 100%;
      height: .88rem;
      padding:.1rem;
      font-weight:bold;
      display: table;
    }
    .jp_item{
      display: table-cell;
      vertical-align: middle;
    }
    .no_n{
      width:.76rem;
      height:auto;
      display: inline-block;
      text-align: center;
    }
    .jp_faf_js{
      padding:0 .25rem;
      font-weight:bold;
      color:#994aef;
      line-height: .45rem;
      margin-top:.1rem;
    }
    .rearch{
      padding:0 .25rem;
      overflow: hidden;
      margin-top:.2rem;
    }
    .rearch_box{
      float:left;
      margin-right:.3rem;
    }
    .rearch_box input{
      width:3.3rem;
      height:.57rem;
      display: inline-block;
      box-sizing:border-box;
      border:1px solid #b5b5b5;
      border-radius:.1rem;
      padding:.1rem;
      font-size: .25rem;
      line-height: .57rem;
    }
    .rearch_btn{
      float:left;
    }
    .rearch_btn button{
      border:0;
      background:#28c1fd;
      border-radius:.1rem;
      display: block;
      width:1.7rem;
      height:.57rem;
    }
    .rearch_btn button img{
      width:.35rem;
      height:auto;
      border:0;
      vertical-align: middle;
      display: inline-block;
    }
    .rearch_btn button span{
      font-size:.32rem;
      line-height: .57rem;
      color:#fff;
      display: inline-block;
      vertical-align: middle;
    }
    .see_pm{
      padding:0 .25rem;
    }
    .see_pm{
      margin-top:.2rem;
    }
    .see_pm_link{
      width:100%;
      padding:.2rem 0;
      background:#28c1fd;
      display: block;
      color:#fff;
      text-align: center;
      border-radius:.1rem;
      text-decoration: none;
    }
    .cansai_xs{
      padding:0 .25rem;
      margin-top:.3rem;
      overflow: hidden;
    }
    .xs_list{
      width:100%;
      overflow: hidden;
    }
    .cansai_xs li{
      margin-bottom:.3rem;
      background: #ececec;
    }
    .xs_list_lt{
    	-moz-column-count:2; /* Firefox */
        -webkit-column-count:2; /* Safari 和 Chrome */
         column-count:2;
        -moz-column-gap: 1em;
        -webkit-column-gap: 1em;
        column-gap: 1em;
    }
    .xs_list_lt li{
    	/*padding: 1em;*/
        margin: 0 0 1em 0;
        -moz-page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
    }
    .xs_list_lt li a,.xs_list_lt li img{
    	width: 100%;
    }
    .xs_img{
      width:100%;
    }
    .xs_img_link{
      width:100%;
      display: block;
    }
    .xs_img img{
      display: block;
      width:100%;
      height:auto;
    }
    .xs_pos,.tuopiao,.piaoshu{
      width:100%;
      text-align: center;
      
    }
    .xs_pos,.piaoshu p{
      padding:.25rem 0;
      color:#28c1fd;
    }
    .tuopiao button{
      text-align: center;
      border-radius:.1rem;
      width:80%;
      height:.52rem;
      border:0;
      background:#28c1fd;
      color:#fff;
      vertical-align: middle;
    }
    .tuopiao button img{
      display: inline-block;
      width:.25rem;
      height:auto;
      vertical-align: middle;
    }
    .tuopiao button span{
      vertical-align: middle;
      display: inline-block;
      font-size: .25rem;
    }

    .footer_btn{
      width:100%;
      padding:.1rem 0;
      background: #000;
      font-size: 0;
      position: fixed;
      bottom:0;
      left:0;
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
